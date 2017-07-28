export const fetchAllBookmarks = () => (
  $.ajax({
    method: 'GET',
    url: 'api/bookmarks'
  })
);

export const fetchBookmark =  id => (
  $.ajax({
    method: 'GET',
    url: `api/bookmarks/${id}`
  })
);

export const createBookmark = bookmark => (
  $.ajax({
    method: 'POST',
    url: 'api/bookmarks',
    data: { bookmark }
  })
);
