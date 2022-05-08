module.exports = {
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // light themes
        priml: "#186c32",
        "on-priml": "#ffffff",
        "prim-ctl": "#a2f5ab",
        "on-prim-ctl": "#002107",
        secondl: "#516351",
        "on-secondl": "#ffffff",
        "second-ctl": "#d4e8d1",
        "on-second-ctl": "#0f1f11",
        tertiaryl: "#3a656d",
        "on-tertiaryl": "#ffffff",
        "tertiary-ctl": "#bdeaf3",
        "on-tertiary-ctl": "#001f24",
        errorl: "#ba1b1b",
        "on-errorl": "#ffffff",
        "error-ctl": "#ffdad4",
        "on-error-ctl": "#410001",
        outlinel: "#727970",
        bgl: "#fcfcf7",
        "on-bgl": "#1a1c19",
        sfl: "#fcfcf7",
        "on-sfl": "#1a1c19",
        "sf-vartl": "#dee5da",
        "on-sf-vartl": "#414940",
        "inv-sfl": "#2f312e",
        "inv-on-sfl": "#f0f1eb",

        // dark themes
        primd: "#87d992",
        "on-primd": "#003912",
        "prim-ctd": "#00531e",
        "on-prim-ctd": "#a2f5ab",
        secondd: "#b7ccb5",
        "on-secondd": "#243425",
        "second-ctd": "#394b3a",
        "on-second-ctd": "#d4e8d1",
        tertiaryd: "#a1ced7",
        "on-tertiaryd": "#00363d",
        "tertiary-ctd": "#1f4d54",
        "on-tertiary-ctd": "#bdeaf3",
        errord: "#ffb4a9",
        "on-errord": "#680003",
        "error-ctd": "#930006",
        "on-error-ctd": "#ffdad4",
        outlined: "#8b9389",
        bgd: "#1a1c19",
        "on-bgd": "#e1e3dd",
        sfd: "#1a1c19",
        "on-sfd": "#e1e3dd",
        "sf-vartd": "#414940",
        "on-sf-vartd": "#c1c9be",
        "inv-sfd": "#e1e3dd",
        "inv-on-sfd": "#1a1c19",
      },
      fontFamily: {
        poi: ["'Poiret One'", "sans-serif"],
        zen: ["'Zen Kaku Gothic New'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
