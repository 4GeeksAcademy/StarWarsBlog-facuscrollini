const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			learnMoreObject: [],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			putLearnMoreObject: (object) => {
				
				setStore({ learnMoreObject: object })
			},

			addFavorite: (listElement) => {
				if(listElement){
				let favoriteList = getStore().favorites
				favoriteList.push(listElement)
				 let uniqueFavoriteList = [...new Set(favoriteList)]
				setStore({favorites: uniqueFavoriteList})
			}
			},

			deleteFavorite: (name) => {
				let copyFavorite = getStore().favorites
				copyFavorite.map((listElements,index)=>{
					if(listElements === name){
						copyFavorite.splice(index, 1)
					}
				})
				
				setStore({favorites: copyFavorite})
			}
		}
	};
};

export default getState;
