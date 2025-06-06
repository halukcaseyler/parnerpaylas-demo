import React, { useState } from "react";

export default function App() {
  const [segment, setSegment] = useState("");
  const [shared, setShared] = useState(false);

  const handleShare = () => {
    if (segment.trim()) {
      setShared(true);
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: 20, fontFamily: "Arial" }}>
      <h2>PartnerPaylaş™ Demo</h2>
      <p>Paylaşmak istediğiniz konuşma segmentini yazın:</p>
      <textarea
        rows={4}
        style={{ width: "100%", marginBottom: 10 }}
        value={segment}
        onChange={(e) => setSegment(e.target.value)}
      />
      <button onClick={handleShare}>Paylaş</button>
      {shared && (
        <div style={{ marginTop: 20, backgroundColor: "#e6ffe6", padding: 10 }}>
          Segment başarıyla paylaşıldı: <strong>{segment.slice(0, 40)}...</strong>
        </div>
      )}
    </div>
  );
}