import { useState, useEffect } from "react";

const habitaciones = [
  { id: 1, nombre: "Habitación 1 - Simple", precio: 30000 },
  { id: 2, nombre: "Habitación 2 - Doble", precio: 45000 },
  { id: 3, nombre: "Habitación 3 - Triple", precio: 60000 },
  { id: 4, nombre: "Habitación 4 - Suite", precio: 80000 },
];

function Books() {
  const [reservas, setReservas] = useState(
    () => JSON.parse(localStorage.getItem("reservas")) || []
  );
  const [form, setForm] = useState({ nombre: "", habitacion: "", fecha: "" });

  // Guarda las reservas para que no se pierdan al cambiar de página
  useEffect(() => {
    localStorage.setItem("reservas", JSON.stringify(reservas));
  }, [reservas]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const ocupada = reservas.some(
      (r) => r.habitacion === form.habitacion && r.fecha === form.fecha
    );
    if (ocupada) {
      alert("Esa habitación ya está reservada para esa fecha.");
      return;
    }
    setReservas([...reservas, form]);
    setForm({ nombre: "", habitacion: "", fecha: "" });
  };

  const cancelar = (index) => {
    setReservas(reservas.filter((_, i) => i !== index));
  };

  return (
    <section id="books">
      <h2>Reservas</h2>

      <div className="rooms">
        {habitaciones.map((h) => (
          <div className="room" key={h.id}>
            <h3>{h.nombre}</h3>
            <p>${h.precio} por noche</p>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <input
          name="nombre"
          placeholder="Tu nombre"
          value={form.nombre}
          onChange={handleChange}
          required
        />
        <select
          name="habitacion"
          value={form.habitacion}
          onChange={handleChange}
          required
        >
          <option value="">Elegí una habitación</option>
          {habitaciones.map((h) => (
            <option key={h.id} value={h.nombre}>
              {h.nombre}
            </option>
          ))}
        </select>
        <input
          type="date"
          name="fecha"
          value={form.fecha}
          onChange={handleChange}
          required
        />
        <button type="submit">Reservar</button>
      </form>

      <h3>Reservas hechas</h3>
      {reservas.length === 0 ? (
        <p>Todavía no hay reservas.</p>
      ) : (
        <ul>
          {reservas.map((r, i) => (
            <li key={i}>
              {r.nombre} - {r.habitacion} - {r.fecha}
              <button onClick={() => cancelar(i)}>Cancelar</button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Books;
