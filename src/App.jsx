import { toHijri } from "hijri-converter";
import "./App.css";
import { useState } from "react";

export default function App() {
  // 2023-11-2
  // year, month, day
  // const year = new Date().toLocaleDateString();
  const [inputDate, setInputDate] = useState("");

  function HandleConvertion() {
    const array = inputDate.split("-").map((item) => Number(item));
    // year / month / day
    console.log(array, "here");
    const hijri = toHijri(array[0], array[1], array[2]);
    return { hd: hijri.hd, hy: hijri.hy, hm: hijri.hm };
  }
  return (
    <section>
      <NavBar />
      <img src="../public/image.png" alt="islamic pattern image" />
      <Content
        inputDate={inputDate}
        setInputDate={setInputDate}
        onConvertion={HandleConvertion}
      />
    </section>
  );
}

function NavBar() {
  return (
    <nav>
      <div className="logo">
        <h3>Hijri__conv</h3>
      </div>
    </nav>
  );
}

function Content({ inputDate, setInputDate, onConvertion }) {
  const hijriDate = onConvertion();
  console.log(hijriDate);
  return (
    <div className="wrapper">
      <div className="main--title">
        <h1>Convert from Gregorian to Higri dates with ease!</h1>
        <p>
          Start now and enter the date <span>&#8680;</span>
        </p>
      </div>

      <div className="date">
        <p>Enter the date &#8681;</p>
        <input
          type="date"
          name="input"
          value={inputDate}
          id=""
          onChange={(event) => setInputDate(event.target.value)}
        />

        <DateInfo onConvertion={onConvertion} />
      </div>
    </div>
  );
}

function DateInfo({ onConvertion }) {
  const hijriDate = onConvertion();
  if (!hijriDate.hm || !hijriDate.hd || !hijriDate.hy) return;
  return (
    <h3>The Hijri date: {`${hijriDate.hd}/${hijriDate.hm}/${hijriDate.hy}`}</h3>
  );
}
