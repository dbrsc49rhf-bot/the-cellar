import { useMemo, useState } from "react";
import "./App.css";

const startingBottles = [
  { id: 1, name: "Bulleit Rye", type: "Whiskey", count: 6, par: 3, supplier: "Pariott Head", image: "/bottles/bulleit-rye.png" },
  { id: 2, name: "Buffalo Trace", type: "Whiskey", count: 2, par: 2, supplier: "Pariott Head", image: "/bottles/buffalo-trace.png" },
  { id: 3, name: "Basil Hayden", type: "Whiskey", count: 1, par: 1, supplier: "Pariott Head", image: "/bottles/basil-hayden.png" },
  { id: 4, name: "Kahlua", type: "Liqueur", count: 1, par: 1, supplier: "Pariott Head", image: "/bottles/kahlua.png" },
  { id: 5, name: "Jim Beam", type: "Whiskey", count: 2, par: 1, supplier: "Pariott Head", image: "/bottles/jim-beam.png" },
  { id: 6, name: "Captain Morgan", type: "Rum", count: 1, par: 1, supplier: "Pariott Head", image: "/bottles/captain-morgain.png" },
  { id: 7, name: "Crown Royal", type: "Whiskey", count: 2, par: 1, supplier: "Pariott Head", image: "/bottles/crown-royal.png" },
  { id: 8, name: "Maker's Mark", type: "Whiskey", count: 2, par: 2, supplier: "Pariott Head", image: "/bottles/makers-mark.png" },
  { id: 9, name: "Woodford Reserve", type: "Whiskey", count: 1, par: 1, supplier: "Pariott Head", image: "/bottles/woodford-reserve.png" },
  { id: 10, name: "Jack Daniels", type: "Whiskey", count: 2, par: 1, supplier: "Pariott Head", image: "/bottles/jack-daniels.png" },
  { id: 11, name: "Aviation", type: "Gin", count: 1, par: 1, supplier: "Pariott Head", image: "/bottles/aviation.png" },
  { id: 12, name: "Sweet Vermouth", type: "Liqueur", count: 1, par: 1, supplier: "Pariott Head", image: "/bottles/sweet-vermouth.png" },
  { id: 13, name: "Angels Envy", type: "Whiskey", count: 1, par: 1, supplier: "Pariott Head", image: "/bottles/angels-envy.png" },
  { id: 14, name: "Hendricks", type: "Gin", count: 3, par: 2, supplier: "Pariott Head", image: "/bottles/hendricks.png" },
  { id: 15, name: "Tanqueray", type: "Gin", count: 3, par: 1, supplier: "Pariott Head", image: "/bottles/tanqueray.png" },
  { id: 16, name: "Bombay Sapphire", type: "Gin", count: 4, par: 1, supplier: "Pariott Head", image: "/bottles/bombay-sapphire.png" },
  { id: 17, name: "Lillet Rose", type: "Wine", count: 1, par: 2, supplier: "Pariott Head", image: "/bottles/lillet-rose.png" },
  { id: 18, name: "Dry Vermouth", type: "Liqueur", count: 1, par: 2, supplier: "Pariott Head", image: "/bottles/dry-vermouth.png" },
  { id: 19, name: "Fernet Branca", type: "Liqueur", count: 2, par: 2, supplier: "Pariott Head", image: "/bottles/fernet-branca.png" },
  { id: 20, name: "Cointreau", type: "Liqueur", count: 2, par: 2, supplier: "Pariott Head", image: "/bottles/cointreau.png" },
  { id: 21, name: "St Germain", type: "Liqueur", count: 1, par: 3, supplier: "Pariott Head", image: "/bottles/st-germain.png" },
  { id: 22, name: "Mezcal", type: "Tequila", count: 2, par: 2, supplier: "Pariott Head", image: "/bottles/mezcal.png" },
  { id: 23, name: "Casamigos Blanco", type: "Tequila", count: 0, par: 1, supplier: "Pariott Head", image: "/bottles/casamigos-blanco.png" },
  { id: 24, name: "Baileys", type: "Liqueur", count: 2, par: 2, supplier: "Pariott Head", image: "/bottles/baileys.png" },
  { id: 25, name: "Casamigos Reposado", type: "Tequila", count: 1, par: 1, supplier: "Pariott Head", image: "/bottles/casamigos-reposado.png" },
  { id: 26, name: "Tito's", type: "Vodka", count: 8, par: 2, supplier: "Pariott Head", image: "/bottles/titos.png" },
  { id: 27, name: "Buttershots", type: "Liqueur", count: 3, par: 2, supplier: "Pariott Head", image: "/bottles/buttershots.png" },
  { id: 28, name: "Grey Goose", type: "Vodka", count: 4, par: 3, supplier: "Pariott Head", image: "/bottles/grey-goose.png" },
  { id: 29, name: "Ketel One", type: "Vodka", count: 1, par: 1, supplier: "Pariott Head", image: "/bottles/ketel-one.png" },
  { id: 30, name: "Belvedere", type: "Vodka", count: 1, par: 1, supplier: "Pariott Head", image: "/bottles/belvedere.png" },
  { id: 31, name: "Galliano", type: "Liqueur", count: 1, par: 2, supplier: "Pariott Head", image: "/bottles/galliano.png" },
  { id: 32, name: "Peppermint Schnapps", type: "Liqueur", count: 3, par: 1, supplier: "Pariott Head", image: "/bottles/peppermint-schnapps.png" },
  { id: 33, name: "Creme de Cacao", type: "Liqueur", count: 3, par: 2, supplier: "Pariott Head", image: "/bottles/creme-de-cacao.png" },
  { id: 34, name: "Aperol", type: "Liqueur", count: 2, par: 1, supplier: "Pariott Head", image: "/bottles/aperol.png" },
  { id: 35, name: "Limoncello", type: "Liqueur", count: 2, par: 2, supplier: "Pariott Head", image: "/bottles/limoncello.png" },
  { id: 36, name: "Campari", type: "Liqueur", count: 1, par: 1, supplier: "Pariott Head", image: "/bottles/campari.png" },
  { id: 37, name: "Milagro", type: "Tequila", count: 1, par: 1, supplier: "Pariott Head", image: "/bottles/milagro.png" },
  { id: 38, name: "Bacardi", type: "Rum", count: 3, par: 2, supplier: "Pariott Head", image: "/bottles/bacardi.png" },
  { id: 39, name: "Malibu", type: "Rum", count: 3, par: 2, supplier: "Pariott Head", image: "/bottles/malibu.png" },
  { id: 40, name: "Blue Curacao", type: "Liqueur", count: 2, par: 2, supplier: "Pariott Head", image: "/bottles/blue-curacao.png" },
  { id: 41, name: "Midori", type: "Liqueur", count: 2, par: 2, supplier: "Pariott Head", image: "/bottles/midori.png" },
];

function App() {
  const [activePage, setActivePage] = useState("inventory");
  const [searchTerm, setSearchTerm] = useState("");
  const [bottles, setBottles] = useState(startingBottles);

  const filteredBottles = useMemo(() => {
    return bottles.filter((bottle) =>
      bottle.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [bottles, searchTerm]);

  const orderList = bottles.filter((bottle) => bottle.count < bottle.par);

  function updateCount(id, change) {
    setBottles((currentBottles) =>
      currentBottles.map((bottle) =>
        bottle.id === id
          ? { ...bottle, count: Math.max(0, bottle.count + change) }
          : bottle
      )
    );
  }

  function copyOrderList() {
    const orderText = [
      "The Canary Lounge Order List",
      "",
      ...orderList.map(
        (bottle) => `${bottle.name} - ${bottle.par - bottle.count}`
      ),
    ].join("\n");

    navigator.clipboard.writeText(orderText);
    alert("Order list copied. Paste it into Messages.");
  }

  return (
    <main className="app">
      <header className="topbar">
        <div>
          <p className="eyebrow">The Canary Lounge</p>
          <h1>The Cellar</h1>
        </div>

        <nav>
          <button onClick={() => setActivePage("inventory")}>Inventory</button>
          <button onClick={() => setActivePage("orders")}>Order List</button>
          <button onClick={() => setActivePage("reports")}>Reports</button>
        </nav>
      </header>

      {activePage === "inventory" && (
        <section>
          <input
            className="search"
            type="text"
            placeholder="Search liquor..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />

          <div className="bottle-list">
            {filteredBottles.map((bottle) => (
              <article className="bottle-card" key={bottle.id}>
                <div className="bottle-image">
                  <img
                    src={bottle.image}
                    alt={bottle.name}
                    className="bottle-photo"
                  />
                </div>

                <div className="bottle-info">
                  <h2>{bottle.name}</h2>
                  <p>{bottle.type}</p>
                  <span>Par: {bottle.par}</span>
                </div>

                <div className="counter">
                  <button
                    className="plus"
                    onClick={() => updateCount(bottle.id, 1)}
                  >
                    +
                  </button>
                  <strong>{bottle.count}</strong>
                  <button
                    className="minus"
                    onClick={() => updateCount(bottle.id, -1)}
                  >
                    -
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {activePage === "orders" && (
        <section className="order-page">
          <div className="order-header">
            <div>
              <p className="eyebrow">Items below par</p>
              <h2>Order List</h2>
            </div>

            <div className="order-actions">
              <div className="order-count">{orderList.length} Items</div>
              <button className="export-button" onClick={copyOrderList}>
                Copy Order
              </button>
            </div>
          </div>

          <div className="order-list">
            {orderList.map((bottle) => (
              <article className="order-card" key={bottle.id}>
                <div className="order-image">
                  <img
                    src={bottle.image}
                    alt={bottle.name}
                    className="bottle-photo"
                  />
                </div>

                <div className="order-info">
                  <h3>{bottle.name}</h3>
                  <p>{bottle.type}</p>
                </div>

                <div className="order-qty">
                  <span>Need</span>
                  <strong>{bottle.par - bottle.count}</strong>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {activePage === "reports" && (
        <section className="placeholder">
          <h2>Reports</h2>
          <p>Reports will come after the inventory system is working.</p>
        </section>
      )}
    </main>
  );
}

export default App;
