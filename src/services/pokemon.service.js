import axios from "axios";

const pokemonUrl = "https://pokeapi.co/api/v2";
export const pokemonService = {
  getAllPokemon,
};

// async function getAllPokemon() {
//   return await axios
//     .get(`${pokemonUrl}/pokemon?limit=104&offset=0`)
//     .then((pokemons) => {
//       // console.log("🍉 Get all pokemon success => " + pokemons);
//       return pokemons;
//     })
//     .catch(() => {
//       console.log("ไม่สามารถดึงข้อมูล Pokemon ได้");
//     });
// }

async function getAllPokemon() {
  const promises = [];
  const data = [];
  for (var i = 1; i < 105; i++) {
    const request = axios.get(`${pokemonUrl}/pokemon-form/${i}`).then(
      (response) => {
        if (response.status === 500) {
          console.log("no pokemon found");
        } else {
          //console.log(response);
          data.push(response.data);
        }
      },
      (error) => {
        console.log("no email found ", error);
      }
    );
    console.log("axios request done");
    promises.push(request);
  }
  await Promise.all(promises);
  return data;
}
