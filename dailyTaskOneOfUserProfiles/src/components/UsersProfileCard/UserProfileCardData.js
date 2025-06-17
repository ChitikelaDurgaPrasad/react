import logo from '../../assets/logo.svg'
const UserProfileCardData = () => {
  return Array.from({ length: 100}, (_, i) => ({
    id: i + 1,
    img: Math.random() > 0.5 ? logo : ''
  }));
};

export default UserProfileCardData


export const fetchUserCards = (page, pageSize = 20) => {
  console.log("inside fetch");
  return new Promise((resolve) => {
    setTimeout(() => {
      const total = 101;
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
    }, 2000);
  });
};

