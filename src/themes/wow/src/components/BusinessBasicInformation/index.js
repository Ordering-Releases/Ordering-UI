import React from 'react'
import Skeleton from 'react-loading-skeleton'
import FaMapMarkerAlt from '@meronex/icons/fa/FaMapMarkerAlt'
import FaStar from '@meronex/icons/fa/FaStar'
import { useTheme } from 'styled-components'
import { useUtils, useLanguage } from 'ordering-components-external'

import { Modal } from '../../../../../components/Modal'
import { BusinessInformation } from '../../../../../components/BusinessInformation'

import {
  BusinessContainer,
  BusinessHeader,
  BusinessContent,
  BusinessInnerContent,
  WrapperBusinessLogo,
  BusinessLogo,
  BusinessInfo,
  BusinessInfoItem,
  BusinessGeneralInfo,
  BusinessLocation
} from './styles'

const types = ['food', 'laundry', 'alcohol', 'groceries']

export const BusinessBasicInformation = (props) => {
  const {
    isSkeleton,
    businessState,
    setOpenBusinessInformation,
    openBusinessInformation
  } = props
  const { business, loading } = businessState

  const theme = useTheme()
  const [, t] = useLanguage()
  const [{ optimizeImage }] = useUtils()

  const getBusinessType = () => {
    if (Object.keys(business).length <= 0) return t('GENERAL', 'General')
    const _types = []
    types.forEach(type => business[type] && _types.push(
      t(`BUSINESS_TYPE_${type?.replace(/\s/g, '_')?.toUpperCase()}`, type)
    ))
    return _types.join(', ')
  }

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <BusinessContainer>
        <BusinessHeader bgimage={business?.header} isSkeleton={isSkeleton} id='container' isClosed={!business?.open}>
          {!business?.open && <h1>{t('CLOSED', 'Closed')}</h1>}
        </BusinessHeader>
        <BusinessContent>
          <BusinessInnerContent>
            <BusinessGeneralInfo>
              <WrapperBusinessLogo>
                {!loading ? (
                  <BusinessLogo bgimage={optimizeImage(business?.logo || theme.images?.dummies?.businessLogo, 'h_200,c_limit')} />
                ) : (
                  <Skeleton height={70} width={70} />
                )}
              </WrapperBusinessLogo>
              <BusinessInfo className='info'>
                <BusinessInfoItem>
                  <div>
                    {!loading ? (
                      <p className='name'>{business?.name}</p>
                    ) : (
                      <Skeleton width={100} />
                    )}
                  </div>
                  <div>
                    {!loading ? (
                      <p>
                        {business?.reviews?.total}
                        <FaStar className='start' />
                      </p>
                    ) : (
                      <Skeleton width={100} />
                    )}
                  </div>
                </BusinessInfoItem>
              </BusinessInfo>
            </BusinessGeneralInfo>
            <BusinessLocation>
              <FaMapMarkerAlt />
              <span>
                {business?.address}
              </span>
              {!loading && (
                <h5 onClick={() => setOpenBusinessInformation(true)}>
                  {t('VIEW_MORE', 'View more')}
                </h5>
              )}
            </BusinessLocation>
          </BusinessInnerContent>
        </BusinessContent>

        <Modal
          width='70%'
          open={openBusinessInformation}
          onClose={setOpenBusinessInformation}
          padding='0'
          hideCloseDefault
          isTransparent
        >
          <BusinessInformation
            business={business}
            getBusinessType={getBusinessType}
            optimizeImage={optimizeImage}
            onClose={setOpenBusinessInformation}
          />
        </Modal>
      </BusinessContainer>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}
