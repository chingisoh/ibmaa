window.MathJax = {
  tex: {
    macros: {

      // calculus
      dydx: ["\\frac{\\mathrm{d}{#1}}{\\mathrm{d}{#2}}", 2],
      defint: ["\\int_{#1}^{#2} {#3}\\, \\mathrm{d}{#4}", 4],

      // probability / stats
      p: "\\mathrm{P}",
      e: "\\mathrm{E}",
      Var: "\\mathrm{Var}",

      // formatting helpers
      Brac: ["\\left( {#1} \\right)", 1],
      abs: ["\\left| {#1} \\right|", 1],

      // trig / constants
      cosec: "\\mathrm{cosec\\,}",
      im: "\\mathrm{i}",

      // vectors / matrices
      vect: ["\\begin{pmatrix}{#1}\\\\{#2}\\\\{#3}\\end{pmatrix}", 3],
      threemat: [
        "\\begin{pmatrix}{#1}&{#2}&{#3}\\\\{#4}&{#5}&{#6}\\\\{#7}&{#8}&{#9}\\end{pmatrix}",
        9
      ],
      Vect: ["\\overrightarrow{#1}", 1],

      // text helpers
      GDC: "\\mathbf{(GDC\\ is\\ allowed.)}",
      RM: ["\\mathrm{#1}", 1],

      // marks / formatting (these are NOT LaTeX layout commands anymore, just text macros)
      M: ["\\hfill [{#1}]", 1],
      mm: ["\\text{Maximum mark: }{#1}", 1],
      nM: ["\\rightline{[{#1}]}", 1],
      Ans: ["\\rightline{[Ans: {#1}]}", 1],

      pp: ["\\rightline{({#1}/TZ{#2}/SP{#3}/Q{#4})}", 4],
      hp: ["\\rightline{({#1}/TZ{#2}/HP{#3}/Q{#4})}", 4]
    }
  }
};