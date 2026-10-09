(function () {
  const bg = document.createElement("div");
  bg.id = "bg";
  document.body.prepend(bg);

  const rnd = (a, b) => Math.random() * (b - a) + a;
  const flowers = ["🌸", "🌼", "🌷", "🌺", "💮"];

  for (let i = 0; i < 22; i++) {
    const b = document.createElement("span");
    b.className = "bubble";
    const s = rnd(14, 70);
    b.style.cssText =
      `left:${rnd(0, 100)}%;width:${s}px;height:${s}px;` +
      `animation-duration:${rnd(9, 22)}s;animation-delay:${rnd(-20, 0)}s;--dx:${rnd(-80, 80)}px`;
    bg.appendChild(b);
  }

  for (let i = 0; i < 14; i++) {
    const f = document.createElement("span");
    f.className = "flower";
    f.textContent = flowers[i % flowers.length];
    f.style.cssText =
      `left:${rnd(0, 100)}%;font-size:${rnd(18, 38)}px;` +
      `animation-duration:${rnd(14, 28)}s;animation-delay:${rnd(-28, 0)}s;--dx:${rnd(-120, 120)}px;--rot:${rnd(-360, 360)}deg`;
    bg.appendChild(f);
  }
})();