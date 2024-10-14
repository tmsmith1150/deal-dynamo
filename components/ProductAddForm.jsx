import addProduct from "@/app/actions/addProduct";


const ProductAddForm = () => {
    return ( 
        <form action={addProduct}>
        <h2 className="text-3xl text-center font-semibold mb-6">
          Add Product
        </h2>

        <div className="mb-4">
          <label
            forHtml="type"
            className="block text-gray-700 font-bold mb-2"
            >Product Type</label>
          <select
            id="type"
            name="type"
            className="border rounded w-full py-2 px-3"
            required
          >
            <option value="Accents">Accents</option>
            <option value="AreaRugs">Area Rugs</option>
            <option value="Bedding">Bedding</option>
            <option value="Lighting">Lighting</option>
            <option value="CaseGoods">Case Goods</option>
            <option value="Upholstery">Upholstery</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2"
            >Product Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="border rounded w-full py-2 px-3 mb-2"
            placeholder="eg. Montclaire Tall Chest"
            required
          />
        </div>
        <div className="mb-4">
          <label
            forHtml="description"
            className="block text-gray-700 font-bold mb-2"
            >Description</label>
          <textarea
            id="description"
            name="description"
            className="border rounded w-full py-2 px-3"
            rows="4"
            placeholder="Add an optional description of your product"
          ></textarea>
        </div>

        <div className="mb-4 bg-blue-50 p-4">
          <label className="block text-gray-700 font-bold mb-2">Sku Number</label>
          <input
            type="text"
            id="sku"
            name="sku"
            className="border rounded w-full py-2 px-3 mb-2"
            placeholder="Sku Number"
          />
          <label className="block text-gray-700 font-bold mb-2">Serial Number</label>
          <input
            type="text"
            id="serial_number"
            name="serial_number"
            className="border rounded w-full py-2 px-3 mb-2"
            placeholder="Serial Number"
            required
          />
          <label className="block text-gray-700 font-bold mb-2">Options</label>
          <input
            type="text"
            id="options"
            name="options"
            className="border rounded w-full py-2 px-3 mb-2"
            placeholder="Options"
            required
          />
          <label className="block text-gray-700 font-bold mb-2">Retail Price</label>
          <input
            type="text"
            id="regular_price"
            name="regular_price"
            className="border rounded w-full py-2 px-3 mb-2"
            placeholder="Retail Price"
          />
          <label className="block text-gray-700 font-bold mb-2">Floor Sample Price</label>
          <input
            type="text"
            id="disc_price"
            name="disc_price"
            className="border rounded w-full py-2 px-3 mb-2"
            placeholder="Floor Sample Price"
          />
        </div>



        <div className="mb-4">
          <label forHtml="images" className="block text-gray-700 font-bold mb-2"
            >Images (Select up to 4 images)</label
          >
          <input
            type="file"
            id="images"
            name="images"
            className="border rounded w-full py-2 px-3"
            accept="image/*"
            multiple
          />
        </div>

        <div>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Product
          </button>
        </div>
      </form>
     );
}
 
export default ProductAddForm;