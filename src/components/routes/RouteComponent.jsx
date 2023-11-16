import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home"
import Edit from "../pages/Edit"
import IndexPage from "../pages/IndexPage"
import NewForm from "../pages/NewForm"
import ShowPage from "../pages/ShowPage"
import Error from "../pages/Error"
import PageNotFound from "../pages/PageNotFound"

export default function RouteComponent() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/pokemon">
        <Route index element={<IndexPage />} />
        <Route path="new" element={<NewForm />} />
        <Route path=":id">
          <Route index element={<ShowPage />} />
          <Route path="edit" element={<Edit />} />
        </Route>
      </Route>

      <Route path="/error" element={<Error />} />
      <Route path="/not-found" element={<PageNotFound />} />
      <Route path="*" element={<Navigate to="/not-found" />} />

    </Routes>
  );
}
