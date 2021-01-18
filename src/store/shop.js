export default {
    state: {
      shopList: [
        {
          id: 1,
          title: 'Nike Red',
          descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut',
          img: require('../assets/images/1.png'),
          gallery: [
            { name: 'Nike boots First', img: require('../assets/images/1.png') },
            { name: 'Nike boots Second', img: require('../assets/images/2.png') },
            { name: 'Nike boots Thrid', img: require('../assets/images/3.png') },
          ]
        },
        {
          id: 2,
          title: 'Nike Default',
          descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut',
          img: require('../assets/images/4.png'),
          gallery: [
            { name: 'Nike boots First', img: require('../assets/images/4.png') },
            { name: 'Nike boots Second', img: require('../assets/images/5.png') },
            { name: 'Nike boots Thrid', img: require('../assets/images/6.png') },
          ]
        },
        {
          id: 3,
          title: 'Nike Green',
          descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut',
          img: require('../assets/images/7.png'),
          gallery: [
            { name: 'Nike boots First', img: require('../assets/images/7.png') },
            { name: 'Nike boots Second', img: require('../assets/images/8.png') },
            { name: 'Nike boots Thrid', img: require('../assets/images/9.png') },
          ]
        },
        {
          id: 4,
          title: 'Nike Street',
          descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut',
          img: require('../assets/images/10.png'),
          gallery: [
            { name: 'Nike boots First', img: require('../assets/images/11.png') },
            { name: 'Nike boots Second', img: require('../assets/images/12.png') }
          ]
        }
      ]
    },
    mutations: {},
    actions: {},
    getters: {
      getShopList (state) {
        return state.shopList
      },
      getProduct: (state) => (id) => {
        return state.shopList.find(product => product.id == id)
      }
    },
  }