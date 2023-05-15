import React from "react"
import * as ReactDomClient from "react-dom/client"
import App from "./App"
import "./css/properties.css"
import "./css/header.css"
import "./css/main.css"

const app = ReactDomClient.createRoot(document.getElementById('root'))
app.render(<App/>)
