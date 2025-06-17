// api.js
export const fetchUserCards = (page, pageSize = 20) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const total = 1000;
      const hasMore = page * pageSize < total;

      const data = Array.from({ length: pageSize }, (_, i) => {
        const id = (page - 1) * pageSize + i;
        return {
          id,
          name: `User ${id}`,
          img: `https://picsum.photos/200?random=${id}`
        };
      });

      resolve({ data, hasMore });
    }, 1000);
  });
};
