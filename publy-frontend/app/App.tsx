import { Route, Routes } from "react-router-dom";
import { Footer, NavBar } from "./components/Nav";
import * as React from "react";
import FeedPage from "./FeedPage/FeedPage";
import StoryPage from "./StoryPage/StoryPage";
import LoginPage from "./LoginPage/LoginPage";
import MemberPage from "./MemberPage/MemberPage";
import { AuthContextProvider } from "./shared/AuthContext";
import TagListPage from "./TagListPage/TagListPage";

import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { createApolloClient } from "./create-apollo-client";

const apolloClient = createApolloClient();

export default function App() {
  return   <BrowserRouter>
    <ApolloProvider client={apolloClient}>
      <AuthContextProvider>
        <div className={"text-amber-900"}>
          <NavBar />
          <Routes>
            <Route path="/" element={<FeedPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/s/:storyId" element={<StoryPage />} />
            <Route path="/u/:memberId" element={<MemberPage />} />
            <Route path="/t/:tagName" element={<TagListPage />} />
          </Routes>
          <Footer />
        </div>
      </AuthContextProvider>
    </ApolloProvider>
  </BrowserRouter>

}