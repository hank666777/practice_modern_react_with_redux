import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './pages/Root';
import HomePage from "./pages/home/HomePage.tsx";
import { homeLoader } from "./pages/home/homeLoader";
import DetailsPage from "./pages/details/DetailsPage.tsx";
import { searchLoader } from "./pages/search/searchLoader.ts";``
import SearchPage from "./pages/search/SearchPage.tsx";
import { detailsLoader } from "./pages/details/detailsLoader";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    children: [
      {// 路由不匹配時，默認值
        index: true,
        element: <HomePage/>,
        loader: homeLoader,
      },
      {
        path: '/search',
        element: <SearchPage/>,
        loader: searchLoader,
      },
      {// /packages/任意名 訪問 DetailsPage
        path: '/packages/:name',
        element: <DetailsPage/>,
        loader: detailsLoader,
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
