import Home from "@pages/home"
import Tasks from "@pages/project"

export const routes = [
    {
        path: '/',
        element: Home
    },
    {
        path: '/tasks/project/:id',
        element: Tasks
    }
]