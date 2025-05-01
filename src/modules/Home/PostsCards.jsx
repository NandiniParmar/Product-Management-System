import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPosts } from "./Slice/homeSlice";

const PostsCards = () => {
  const dispatch = useDispatch();
  const { posts, total, loading } = useSelector((state) => state.Home);
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 6;

  const totalPages = Math.ceil(total / limit);

  useEffect(() => {
    const skip = (currentPage - 1) * limit;
    dispatch(fetchAllPosts({ limit, skip }));
  }, [currentPage, dispatch]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Posts</h2>

        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts?.map((post) => (
              <div
                key={post.id}
                className="bg-white p-6 rounded-lg shadow text-center"
              >
                <div className="mb-2 text-sm font-semibold text-blue-600">
                  #{post.id}
                </div>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.body}</p>
                <div className="flex justify-center gap-6 text-gray-500">
                  <span>👍 100</span>
                  <span>👎 5</span>
                  <span>👁 300</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        <div className="flex justify-center items-center mt-10 space-x-2">
          <button
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Prev
          </button>

          {/* First page */}
          {currentPage > 2 && (
            <>
              <button
                className={`px-3 py-1 rounded ${
                  currentPage === 1
                    ? "bg-blue-500 text-white"
                    : "bg-white border"
                }`}
                onClick={() => handlePageChange(1)}
              >
                1
              </button>
              {currentPage > 3 && <span className="px-2">...</span>}
            </>
          )}

          {/* Current, previous, next */}
          {[currentPage - 1, currentPage, currentPage + 1].map((page) => {
            if (page > 0 && page <= totalPages) {
              return (
                <button
                  key={page}
                  className={`px-3 py-1 rounded ${
                    currentPage === page
                      ? "bg-blue-500 text-white"
                      : "bg-white border"
                  }`}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </button>
              );
            }
            return null;
          })}

          {/* Last page */}
          {currentPage < totalPages - 1 && (
            <>
              {currentPage < totalPages - 2 && (
                <span className="px-2">...</span>
              )}
              <button
                className={`px-3 py-1 rounded ${
                  currentPage === totalPages
                    ? "bg-blue-500 text-white"
                    : "bg-white border"
                }`}
                onClick={() => handlePageChange(totalPages)}
              >
                {totalPages}
              </button>
            </>
          )}

          <button
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostsCards;
