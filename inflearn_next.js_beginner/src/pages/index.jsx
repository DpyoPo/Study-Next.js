import ProductList from "../../components/ProductList";

// '/'에 해당하는 페이지 컴포넌트
function ProductPage() {

  return (
    <div>
      <h1>상품목록 페이지</h1>
      <ProductList></ProductList>
    </div>
  );
}

/**
 * 1. 상품 목록 페이지 - '/'
 * 2. 상품 상세 페이지 - '/products/productId'
 * 3. 장바구니 페이지 - '/carts'
 */

export default ProductPage;