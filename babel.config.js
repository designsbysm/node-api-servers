module.exports = api => {
  api.cache(true);

  return {
    // plugins: [
    //   [
    //     "@babel/plugin-proposal-pipeline-operator",
    //     { proposal: "smart" },
    //   ],
    // ],
    presets: [
      [
        "@babel/preset-env",
        {
          targets: {
            node: "12",
          },
        },
      ],
    ],
  };
};
