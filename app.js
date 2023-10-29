const input = document.querySelector(".searchTerm");
const form = document.querySelector("form");
const div = document.querySelector(".main-div");
const div2 = document.querySelector(".main-div2");
const span = document.querySelector(".span-bio");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const inputt = input.value.split(" ").join("");
  try {
    const res = await axios.get(`https://api.github.com/users/${inputt}`);
    console.log(res.data);

    printt();
    function printt() {
      res.data.name = res.data.name === null ? "No name" : res.data.name;
      res.data.location =
        res.data.location === null ? "Earth" : res.data.location;
      res.data.bio =
        res.data.bio === null ? "No biography defined !!" : res.data.bio;

      div.innerHTML = ` <section class="text-gray-600">
      <div
        class="container mx-auto flex px-5 py-24 items-center justify-center flex-col"
      >
        <img
          class="lg:w-1/4 md:w-1/4 w-2/4 mb-10 object-cover object-center rounded"
          alt="hero"
          src="${res.data.avatar_url}"
        />
        <div class="text-center lg:w-2/3 w-full">
          <h1
            class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"
          >
            ${res.data.login}(${res.data.name})
          </h1>
          <div class="inner-table">
            <table>
              <tr>
                <th>Location :</th>
                <td>
                  <span style="color:#67d9e7
                  ; text-decoration: underline">${res.data.location}</span>
                </td>
              </tr>
              <tr>
                <th>Biography :</th>
                <td>
                  <span class="span-bio"
                    >${res.data.bio}</span
                  >
                </td>
              </tr>
              <tr>
                <tr>
                  <th>Repositories :</th>
                  <td>
                   <a class="repo-link" style="hover" target =_blank href="https:/github.com/${res.data.login}?tab=repositories">${res.data.public_repos}</a>
                    
                  </td>
                </tr>
                <th>Followers :</th>
                <td>
                  <span style=""
                    >${res.data.followers}</span
                  >
                </td>
              </tr>
              <tr>
                <th>Following :</th>
                <td>
                  <span style=""
                    >${res.data.following}</span
                  >
                </td>
              </tr>
            </table>
          </div>
          <div class="flex mt-6 justify-center">
            <button
              class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              <a  href="https:/github.com/${res.data.login}">Check Github <i  class="fa-brands fa-github fa-bounce "></i></a>
            </button>
            <button
              class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
            >
              <a  href="https:/github.com/${res.data.login}?tab=repositories">Repos <i class="fa-solid fa-code-branch fa-beat" style="color:#01233e
              ;"></i></a>
            </button>
          </div>
        </div>
      </div>
    </section>`;

      input.value = "";
      if (res) {
        div2.innerHTML = "";
      }
    }
  } catch (error) {
    div2.innerHTML = `<h2>Not an Account named '${input.value}'</h2>`;
    if (error) {
      div.innerHTML = "";
    }
  }
});
