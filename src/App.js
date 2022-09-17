import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SnackbarProvider from "react-simple-snackbar";
import MainContent from "./components/MainContent";
import CoursePage from "./pages/CoursePage";
import WrapperPage from "./pages/WrapperPage";

const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <SnackbarProvider>
      <BrowserRouter>
        <ApolloProvider client={client}>
          <Routes>
            <Route path="*" element={<WrapperPage />} />
            <Route exact path="/courses/:courseId" element={<CoursePage />}>
              <Route path=":chapterId" element={<MainContent />} />
            </Route>
          </Routes>
        </ApolloProvider>
      </BrowserRouter>
    </SnackbarProvider>
  );
}

export default App;
