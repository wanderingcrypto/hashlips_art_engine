"use strict";

const path = require("path");
const isLocal = typeof process.pkg === "undefined";
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);
const { MODE } = require(path.join(basePath, "src/blendMode.js"));
const description =
  "Crypto Karens is a collection of 100 outraged, randomly generated NFTs that exist on the blockchain. Holders of Crypto Karens take part in the multi-meme-verse and future community drops and events. Be on the look-out as some are unique and more rare than others.";
const baseUri = "ipfs://QmP8zGR7MXGMdStzsifcEH8A3u8AxZeg68pHum6QxHpdQC";
const metadataName = "Crypto Karens";

const layerConfigurations = [
  {
    growEditionSizeTo: 100,
    layersOrder: [
      { name: "Background" },
      { name: "Base" },
      { name: "Eyes" },
      { name: "Hair" },
      { 
        name: "Misc",
        // todo: implement rules for misc ie; have a max number of traits
        rules: {
          min: 1,
          max: 6
        }
      },
      { name: "Mouth" },
      { name: "Nose" },
    ],
    rarityPercent: 5
  },
];

const uniques = [
  {
    name: "Rainbow Karen",
    description: "\"Together we can make a difference.\" This Karen is experiencing an awakening...",
    folder: "rares/RainbowKaren/"
  },
  {
    name: "Zombie Karen",
    description: "Brains.. brains.. can I speak to your overlord...",
    folder: "rares/ZombieKaren/"
  }
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 512,
  height: 512,
};

const background = {
  generate: true,
  brightness: "80%",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.width / format.height,
  imageName: "preview.png",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  uniques,
  metadataName
};
