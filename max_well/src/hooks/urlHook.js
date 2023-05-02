import { useContext } from "react";
import UrlContext from "../context/UrlContext";

export default function UrlHook(){
    return useContext(UrlContext);
}