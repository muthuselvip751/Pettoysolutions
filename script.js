window.lazySizesConfig = window.lazySizesConfig || {};
window.lazySizesConfig.expand = 250;
window.lazySizesConfig.loadMode = 1;
window.lazySizesConfig.loadHidden = false;




window.theme = window.theme || {};
		theme = {
			settings: {
				money_with_currency_format:"${{amount}}",
				cart_drawer:true},
			routes: {
				root_url: '/',
				cart_url: '/cart',
				cart_add_url: '/cart/add',
				search_url: '/search',
				cart_change_url: '/cart/change',
				cart_update_url: '/cart/update',
				predictive_search_url: '/search/suggest',
			},
			variantStrings: {
        addToCart: `Add to cart`,
        soldOut: `Sold out`,
        unavailable: `Unavailable`,
      },
			strings: {
				requiresTerms: `You must agree with the terms and conditions of sales to check out`,
			}
		};