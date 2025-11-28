// src/components/Notes/Notes.jsx
import { useEffect, useMemo, useState } from "react";
import notesData from "../../data/notes.json";
import AddNote from "./AddNote";
import NoteForm from "./NoteForm"; // 👈 lo usamos para editar

// Normalize strings to avoid duplicates like "Work" vs "work"
const normalize = (s = "") => s.trim().toLowerCase();

const Notes = ({ searchTerm = "" }) => {
  // Load notes from localStorage or fallback JSON
  const [notes, setNotes] = useState(() => {
    try {
      const saved = localStorage.getItem("notes");
      return saved ? JSON.parse(saved) : notesData;
    } catch {
      return notesData;
    }
  });

  // Local selected category state (self-contained)
  const [activeCategory, setActiveCategory] = useState("All");

  // 🔽 id de la nota cuyo menú está abierto
  const [menuOpenId, setMenuOpenId] = useState(null);
  // 🔽 id de la nota que estamos editando
  const [editingId, setEditingId] = useState(null);

  // Persist notes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("notes", JSON.stringify(notes));
    } catch {
      /* ignore storage errors */
    }
  }, [notes]);

  // Derive unique categories from current notes
  const categories = useMemo(() => {
    const map = new Map();
    for (const n of notes) {
      const key = normalize(n.category);
      if (key) map.set(key, n.category?.trim() || "");
    }
    return ["All", ...Array.from(map.values())];
  }, [notes]);

  // Tailwind color classes for note cards (kept as you had)
  const colorClasses = {
    green: "bg-green-300",
    blue: "bg-blue-300",
    yellow: "bg-yellow-300",
    violet: "bg-violet-300",
    rose: "bg-rose-300",
    fuchsia: "bg-fuchsia-300",
  };

  // Build a dynamic map: category -> bg class based on the notes' `note.color`
  // First note that defines a color for a category "wins".
  const categoryBgByCat = useMemo(() => {
    const acc = {};
    for (const n of notes) {
      const k = normalize(n.category);
      if (!k) continue;
      const cls = colorClasses[n.color]; // translate note.color -> Tailwind class
      if (cls && !acc[k]) acc[k] = cls; // keep the first one found
    }
    return acc;
  }, [notes]);

  // Filter notes by search term + active category
  const filteredNotes = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return notes.filter((note) => {
      const title = (note.title || "").toLowerCase();
      const matchesSearch = title.includes(term);
      const matchesCategory =
        activeCategory && activeCategory !== "All"
          ? normalize(note.category) === normalize(activeCategory)
          : true;
      return matchesSearch && matchesCategory;
    });
  }, [notes, searchTerm, activeCategory]);

  // Add a new note (categories will auto-update because they derive from notes)
  const handleAddNote = (newNote) => {
    const cleaned = {
      id: newNote?.id ?? Date.now(),
      title: newNote?.title?.trim() || "Untitled",
      description:
        newNote?.description?.trim() ||
        newNote?.content?.trim() ||
        "",
      category: newNote?.category?.trim() || "",
      color: newNote?.color || "violet",
    };
    setNotes((prev) => [...prev, cleaned]);
  };

  // ✏️ editar nota
  const handleUpdateNote = (id, updatedData) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id ? { ...note, ...updatedData } : note
      )
    );
    setEditingId(null);
  };

  // 🗑 borrar nota
  const handleDeleteNote = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
    if (editingId === id) setEditingId(null);
    if (menuOpenId === id) setMenuOpenId(null);
  };

  return (
    <div className="w-full min-h-[60px] px-2 sm:px-4 md:px-12 py-2">
      {/* Categories bar (clickable) */}
      <div className="w-full flex justify-center items-center flex-wrap gap-2 mb-12  dark:text-gray-300 ">
        {categories.map((cat) => {
          const key = normalize(cat);
          const bgClass =
            key === "all"
              ? "bg-gray-200"
              : categoryBgByCat[key] || "bg-violet-400";

          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`bg-white dark:bg-gray-700 inline-flex items-center gap-2 h-[30px] pl-0 pr-2 rounded-sm transition cursor-pointer
                ${
                  activeCategory === cat
                    ? "ring-1 ring-violet-400 shadow-md"
                    : ""
                }`}
              aria-pressed={activeCategory === cat}
            >
              <div
                className={`${bgClass} w-8 h-[30px] flex items-center justify-center rounded-bl-sm rounded-tl-sm text-2xl font-mono dark:text-gray-700 `}
              >
                #
              </div>
              <span className="text-base capitalize whitespace-nowrap">
                {cat}
              </span>
            </button>
          );
        })}
      </div>

      {/* Notes grid with the "Add note" card */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {/* Create new note */}
        <AddNote onAdd={handleAddNote} />

        {/* Render filtered notes */}
        {filteredNotes.map((note) => {
          const isEditing = editingId === note.id;
          const isMenuOpen = menuOpenId === note.id;

          return (
            <div
              key={note.id}
              className={`${
                colorClasses[note.color] || "bg-gray-200"
              } relative rounded-2xl shadow-sm p-6 flex flex-col justify-between h-[300px]`}
            >
              {/* 3 puntitos (solo cuando no estamos editando) */}
              {!isEditing && (
                <button
                  className="absolute top-3 right-5 text-gray-700 dark:text-gray-900 text-xl hover:text-black"
                  onClick={() =>
                    setMenuOpenId(isMenuOpen ? null : note.id)
                  }
                >
                  ⋮
                </button>
              )}

              {/* Menú Edit / Delete */}
              {isMenuOpen && (
                <div className="absolute top-8 right-3 bg-white rounded-lg shadow-lg text-sm overflow-hidden z-20">
                  <button
                    className="w-full px-4 py-2 text-left hover:bg-gray-100"
                    onClick={() => {
                      setEditingId(note.id);
                      setMenuOpenId(null);
                    }}
                  >
                    ✏️ Edit
                  </button>
                  <button
                    className="w-full px-4 py-2 text-left text-red-600 hover:bg-red-50"
                    onClick={() => handleDeleteNote(note.id)}
                  >
                    🗑️ Delete
                  </button>
                </div>
              )}

              {/* Contenido: form si editando, texto si no */}
              {isEditing ? (
                <NoteForm
                  initialData={note}
                  submitLabel="Save"
                  onSubmit={(values) => handleUpdateNote(note.id, values)}
                  onCancel={() => setEditingId(null)} // opcional, solo si tu NoteForm lo soporta
                />
              ) : (
                <div>
                  <h2 className="text-3xl font-semibold">{note.title}</h2>
                  <p className="mt-4 text-base whitespace-pre-line">
                    {note.description}
                  </p>
                  {note.category && (
                    <p className="mt-4 text-sm whitespace-pre-line">
                      #{note.category}
                    </p>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Notes;
