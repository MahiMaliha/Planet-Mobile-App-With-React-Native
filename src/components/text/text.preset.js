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
   },
   h2:{
    ...BOLD,
    fontSize:28
   },
   h3:{
    ...BOLD,
    fontSize:24
   },
   h4:{
    ...BOLD,
    fontSize:14
   },
}