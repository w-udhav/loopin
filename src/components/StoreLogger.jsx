import { useDataStore } from "../store/dataStore";

const StoreLogger = () => {
  const store = useDataStore();

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        right: 0,
        width: "400px",
        maxHeight: "50vh",
        background: "#111",
        color: "#fff",
        fontFamily: "monospace",
        fontSize: "0.85rem",
        borderTopLeftRadius: "8px",
        boxShadow: "0 0 10px #000a",
        zIndex: 9999,
        overflow: "auto",
        padding: "1rem",
        opacity: 0.95,
      }}
    >
      <div
        style={{
          marginBottom: "0.5rem",
          fontWeight: "bold",
          letterSpacing: "1px",
        }}
      >
        Zustand Store (Live)
      </div>
      <pre style={{ whiteSpace: "pre-wrap", wordBreak: "break-all" }}>
        {JSON.stringify(store, null, 2)}
      </pre>
    </div>
  );
};

export default StoreLogger;
