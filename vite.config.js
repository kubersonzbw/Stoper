import sass from "rollup-plugin-sass";

export default {
  rollupInputOptions: {
    plugins: [
      sass({
        output: "dist/style.scss",
      }),
    ],
  },
};
