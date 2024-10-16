import React, { useEffect } from 'react'
import { ProductsList, useLanguage } from 'ordering-components-external'
import { SingleProductCard } from '../SingleProductCard'
import { NotFoundSource } from '../../../../../components/NotFoundSource'
import { useWindowSize } from '../../../../../hooks/useWindowSize'
import {
  ProductsContainer,
  ProductsListing,
  WrapAllCategories,
  ErrorMessage,
  WrapperNotFound
} from './styles'

const BusinessProductsListUI = (props) => {
  const {
    errors,
    businessId,
    category,
    categories,
    categoryState,
    isBusinessLoading,
    onProductClick,
    handleSearchRedirect,
    featured,
    searchValue,
    isCartOnProductsList,
    handleClearSearch,
    errorQuantityProducts
  } = props

  const [, t] = useLanguage()
  const windowSize = useWindowSize()

  const getUniquCategoryName = (categoryName) => {
    let _categoryName = categoryName
    if (categoryName.indexOf('/') > -1) {
      _categoryName = categoryName.split('/')[1]
    }
    return _categoryName
  }

  useEffect(() => {
    if (windowSize.width < 540) {
      document.querySelector('#productWrapper').scrollIntoView({ behavior: 'smooth' })
    }

    if (windowSize.width > 768) {
      window.scrollTo({ top: 335, behavior: 'smooth' })
    }
  }, [category])

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <ProductsContainer>
        {category?.id && (
          <WrapAllCategories>
            <h3>{category?.name}</h3>
            <ProductsListing>
              {
                category.products?.map(product => (
                  <SingleProductCard
                    key={product?.id}
                    isSoldOut={(product.inventoried && !product.quantity)}
                    product={product}
                    businessId={businessId}
                    onProductClick={onProductClick}
                    isCartOnProductsList={isCartOnProductsList}
                  />
                ))
              }
            </ProductsListing>
          </WrapAllCategories>
        )}
        {
          !category?.id && (
            <>
              {
                featured && categoryState?.products?.find(product => product.featured) && (
                  <WrapAllCategories>
                    <h3>{t('FEATURED', 'Featured')}</h3>
                    <ProductsListing>
                      {categoryState.products?.map(product => product.featured && (
                        <SingleProductCard
                          key={product?.id}
                          isSoldOut={(product.inventoried && !product.quantity)}
                          product={product}
                          businessId={businessId}
                          onProductClick={onProductClick}
                          isCartOnProductsList={isCartOnProductsList}
                        />
                      ))}
                    </ProductsListing>
                  </WrapAllCategories>
                )
              }
            </>
          )
        }
        {
          !category?.id && categories.filter(category => category?.id !== null).map((category, i, _categories) => {
            // const products = categoryState.products?.filter(product => product?.category_id === category?.id) || []
            return (
              <React.Fragment key={category?.id}>
                {
                  category?.products?.length > 0 && (
                    <WrapAllCategories id='container'>
                      <h3>{getUniquCategoryName(category.name)}</h3>
                      <ProductsListing>
                        {
                          category?.products?.map((product, i) => (
                            <SingleProductCard
                              key={i}
                              isSoldOut={product.inventoried && !product.quantity}
                              businessId={businessId}
                              product={product}
                              onProductClick={onProductClick}
                              isCartOnProductsList={isCartOnProductsList}
                            />
                          ))
                        }
                        {
                          categoryState.loading && (i + 1) === _categories.length && [...Array(categoryState.pagination.nextPageItems).keys()].map(i => (
                            <SingleProductCard
                              key={`skeleton:${i}`}
                              isSkeleton
                            />
                          ))
                        }
                      </ProductsListing>
                    </WrapAllCategories>
                  )
                }
              </React.Fragment>
            )
          })
        }
        {
          (categoryState.loading || isBusinessLoading) && (
            <WrapAllCategories id='container'>
              <ProductsListing style={{ marginTop: '20px' }}>
                {[...Array(categoryState.pagination.nextPageItems).keys()].map(i => (
                  <SingleProductCard
                    key={`skeleton:${i}`}
                    isSkeleton
                  />
                ))}
              </ProductsListing>
            </WrapAllCategories>
          )
        }
        {
          !categoryState.loading && !isBusinessLoading && categoryState.products.length === 0 && !((searchValue && errorQuantityProducts) || (!searchValue && !errorQuantityProducts)) && (
            <WrapperNotFound>
              <NotFoundSource
                content={!searchValue ? t('ERROR_NOT_FOUND_PRODUCTS_TIME', 'No products found at this time') : t('ERROR_NOT_FOUND_PRODUCTS', 'No products found, please change filters.')}
                btnTitle={!searchValue ? t('SEARCH_REDIRECT', 'Go to Businesses') : t('CLEAR_FILTERS', 'Clear filters')}
                onClickButton={() => !searchValue ? handleSearchRedirect() : handleClearSearch('')}
              />
            </WrapperNotFound>
          )
        }
        {errors && errors.length > 0 && (
          errors.map((e, i) => (
            <ErrorMessage key={i}>ERROR: [{e}]</ErrorMessage>
          ))
        )}
      </ProductsContainer>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}

export const BusinessProductsList = (props) => {
  const businessProductsListProps = {
    ...props,
    UIComponent: BusinessProductsListUI
  }

  return (
    <ProductsList {...businessProductsListProps} />
  )
}
