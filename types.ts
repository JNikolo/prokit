/**
 * @file types.ts
 * @description Type definitions and constants for the jersey customization engine.
 */

/**
 * Available visual patterns for the jersey body.
 */
export enum JerseyPattern {
  SOLID = "solid",
  STRIPES = "stripes",
  HOOPS = "hoops",
  GRADIENT = "gradient",
  HALF = "half",
  CHEVRON = "chevron",
}

/**
 * Supported collar design styles.
 */
export enum CollarType {
  ROUND = "round",
  V_NECK = "v-neck",
  POLO = "polo",
}

/**
 * Side of the jersey being viewed.
 */
export enum ViewMode {
  FRONT = "front",
  BACK = "back",
}

/**
 * Interface representing the complete state of a jersey design.
 */
export interface JerseyConfig {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  textColor: string;
  pattern: JerseyPattern;
  collarType: CollarType;
  backNumber: string;
  backName: string;
  view: ViewMode;
  showCrest: boolean;
}

export const DEFAULT_CONFIG: JerseyConfig = {
  primaryColor: "#ef4444", // red-500
  secondaryColor: "#1e293b", // slate-800
  accentColor: "#fde047", // yellow-300
  textColor: "#ffffff",
  pattern: JerseyPattern.STRIPES,
  collarType: CollarType.ROUND,
  backNumber: "10",
  backName: "MESSI",
  view: ViewMode.FRONT,
  showCrest: true,
};
