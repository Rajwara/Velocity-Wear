import type { Product } from "@/data/products";
import { animationAttr, type Animation } from "@/components/animation";

/** Product card used in shop grids, category pages and "related products". */
export default function ProductCard({
  product,
  animation,
}: {
  product: Product;
  animation?: Animation;
}) {
  return (
    <div role="listitem" className="shop-item w-dyn-item" {...animationAttr(animation)}>
      <div className="shop-card">
        <div className="shop-thumb">
          <a
            aria-label="Link Block"
            href={`/product/${product.slug}`}
            className="shop-img w-inline-block"
          >
            <img
              loading="lazy"
              data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D"
              src={product.image}
              alt={product.name}
              className="shop-image"
            />
          </a>
          <div className="shop-cart">
            <form
              data-node-type="commerce-add-to-cart-form"
              data-commerce-sku-id={product.skuId}
              data-commerce-product-id={product.productId}
              className="w-commerce-commerceaddtocartform shop-default"
            >
              <div
                data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_sku_values_3dr%22%2C%22to%22%3A%22optionValues%22%7D%5D"
                data-commerce-product-sku-values="%7B%7D"
                data-node-type="commerce-add-to-cart-option-list"
                data-commerce-product-id={product.productId}
                data-preselect-default-variant="false"
                role="group"
              />
              <div className="shop-btn">
                <input
                  type="submit"
                  data-node-type="commerce-add-to-cart-button"
                  data-loading-text="."
                  aria-busy="false"
                  aria-haspopup="dialog"
                  className="w-commerce-commerceaddtocartbutton shop-add"
                  value="."
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  viewBox="0 0 18 18"
                  fill="none"
                  className="shop-bag"
                >
                  <path
                    d="M17.9999 6.04687V8.85937C17.9999 9.24774 17.6851 9.5625 17.2968 9.5625H16.8344L16.5382 12.1988C16.4978 12.5581 16.1935 12.8234 15.8403 12.8235C15.814 12.8235 15.7877 12.822 15.7609 12.819C15.375 12.7757 15.0973 12.4276 15.1407 12.0418L15.5071 8.78096C15.5471 8.42527 15.8478 8.15625 16.2058 8.15625H16.5938V6.74999H1.40625V8.15625H13.3946C13.7829 8.15625 14.0977 8.47114 14.0977 8.85937C14.0977 9.24774 13.7829 9.5625 13.3946 9.5625H2.5936L3.28794 15.3549C3.37253 16.0612 3.9728 16.5938 4.68417 16.5938H13.3722C14.0888 16.5938 14.6896 16.0567 14.7696 15.3445C14.8129 14.9586 15.1609 14.681 15.5468 14.7243C15.9327 14.7677 16.2104 15.1157 16.1671 15.5016C16.007 16.9258 14.8055 18 13.3722 18H4.68417C3.26143 18 2.0609 16.9347 1.89157 15.5222L1.17732 9.5625H0.703126C0.314759 9.5625 0 9.24774 0 8.85937V6.04687C0 5.6585 0.314759 5.34374 0.703126 5.34374H3.19703L6.91247 0.286863C7.14236 -0.0259734 7.58237 -0.0934021 7.89534 0.136625C8.20831 0.366514 8.2756 0.806517 8.04571 1.11949L4.94207 5.34374H13.0839L9.98014 1.11949C9.75025 0.806517 9.81754 0.366514 10.1305 0.136625C10.4435 -0.0934021 10.8835 -0.0261107 11.1135 0.286863L14.8288 5.34374H17.2968C17.6851 5.34374 17.9999 5.65864 17.9999 6.04687ZM8.29689 11.6719V14.4844C8.29689 14.8728 8.61165 15.1875 9.00002 15.1875C9.38825 15.1875 9.70314 14.8728 9.70314 14.4844V11.6719C9.70314 11.2835 9.38825 10.9688 9.00002 10.9688C8.61165 10.9688 8.29689 11.2835 8.29689 11.6719ZM11.1094 11.6719V14.4844C11.1094 14.8728 11.4242 15.1875 11.8125 15.1875C12.2008 15.1875 12.5156 14.8728 12.5156 14.4844V11.6719C12.5156 11.2835 12.2008 10.9688 11.8125 10.9688C11.4242 10.9688 11.1094 11.2835 11.1094 11.6719ZM5.48439 11.6719V14.4844C5.48439 14.8728 5.79914 15.1875 6.18751 15.1875C6.57574 15.1875 6.89064 14.8728 6.89064 14.4844V11.6719C6.89064 11.2835 6.57574 10.9688 6.18751 10.9688C5.79914 10.9688 5.48439 11.2835 5.48439 11.6719Z"
                    fill="currentColor"
                  />
                </svg>
                <div className="shop-text">Add to cart</div>
              </div>
              <a
                data-node-type="commerce-buy-now-button"
                aria-busy="false"
                aria-haspopup="false"
                data-default-text="Buy now"
                data-subscription-text="Subscribe now"
                style={{ display: "none" }}
                className="w-commerce-commercebuynowbutton shop-buy"
                href="/checkout"
              >
                Buy now
              </a>
            </form>
            <div
              style={{ display: "none" }}
              className="w-commerce-commerceaddtocartoutofstock shop-stock"
              tabIndex={0}
            >
              <div>This product is out of stock.</div>
            </div>
            <div
              aria-live="assertive"
              data-node-type="commerce-add-to-cart-error"
              style={{ display: "none" }}
              className="w-commerce-commerceaddtocarterror shop-error"
            >
              <div
                data-node-type="commerce-add-to-cart-error"
                data-w-add-to-cart-quantity-error="Product is not available in this quantity."
                data-w-add-to-cart-general-error="Something went wrong when adding this item to the cart."
                data-w-add-to-cart-mixed-cart-error="You can’t purchase another product with a subscription."
                data-w-add-to-cart-buy-now-error="Something went wrong when trying to purchase this item."
                data-w-add-to-cart-checkout-disabled-error="Checkout is disabled on this site."
                data-w-add-to-cart-select-all-options-error="Please select an option in each set."
              >
                Product is not available in this quantity.
              </div>
            </div>
          </div>
        </div>
        <div className="shop-details">
          <a href={`/product/${product.slug}`} className="shop-name">
            {product.name}
          </a>
          <div className="shop-price">
            <div className="shop-original-price">{product.price}</div>
            <div className="shop-compare-price">{product.comparePrice}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
