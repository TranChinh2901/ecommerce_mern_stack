// import { IoSearchSharp } from "react-icons/io5";
// import { useSearch } from "../../context/search";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import Layout from "../Layout/Layout";

// const SearchInput = () => {
//     const [values, setValues] = useSearch()
//     const navigate = useNavigate()

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const { data } = await axios.get(`http://localhost:3000/api/v1/search/${values.keyword}`)
//             setValues({ ...values, results: data });
//             navigate("/search")
//         } catch (error) {
//             console.log(error);

//         }
//     }

//     return (
//         <Layout className="container" >
//             <form className="d-flex" role="search" onSubmit={handleSubmit}>
//                 <input
//                     value={values.keyword}
//                     onChange={(e) => setValues({ ...values, keyword: e.target.value })}
//                     className="form-control me-2 "
//                     type="search"
//                     placeholder="Search"
//                     aria-label="Search"
//                     id="formsearch"
//                     style={{

//                     }}
//                 />
//                 <button className="btn btn-outline-light" type="submit"  >
//                     <IoSearchSharp />
//                 </button>
//             </form>
//         </Layout>
//     )
// }

// export default SearchInput