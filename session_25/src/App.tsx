import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './pages/Root';
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import { searchLoader } from "./pages/search/searchLoader.ts";``
import SearchPage from "./pages/search/SearchPage.tsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    children: [
      {// 路由不匹配時，默認值
        index: true,
        element: <HomePage/>,
      },
      {
        path: '/search',
        element: <SearchPage/>,
        loader: searchLoader,
      },
      {// /packages/任意名 訪問 DetailsPage
        path: '/packages/:name',
        element: <DetailsPage/>,
      }
    ],
  }
])

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
