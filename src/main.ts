import { createApp } from "vue"
import { createPinia } from "pinia"
import "@/global.css"
import "@/request"
import App from "./App.vue"
import router from "@/router"
console.log("import.meta.env", import.meta.env)
const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount("#app")
