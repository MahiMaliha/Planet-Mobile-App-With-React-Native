import { colors } from "../../theme/colors";

const BASE = {
    fontSize:16,
    color:colors.white
}
const BASE_BOLD = {
    fontSize:16,
    color:colors.white
}
const BOLD = {
   
    color:colors.white
}
export const presets = {
   default:BASE,
   bold:BOLD,
   h1:{
    ...BOLD,
    fontSize:32
   }
}