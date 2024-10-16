import React from 'react'
import { StripeElementsForm as StripeElementsFormController, useLanguage } from 'ordering-components-external'
import { loadStripe } from '@stripe/stripe-js/pure'
import { Elements } from '@stripe/react-stripe-js'

import {
  ErrorMessage
} from './styles'

import { CardForm } from '../CardForm'
import { StripeMethodForm } from '../../../../../components/StripeMethodForm'

const StripeElementsFormUI = (props) => {
  const {
    publicKey,
    handleSource,
    businessId,
    requirements,
    onNewCard,
    toSave,
    onCancel,
    paymethod,
    cart,
    handlePlaceOrder,
    methodsPay,
    cartGroup
  } = props
  const [, t] = useLanguage()
  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      {publicKey ? (
        <Elements stripe={loadStripe(publicKey)}>
          {methodsPay?.includes(paymethod) ? (
            <StripeMethodForm
              cart={cart}
              cartGroup={cartGroup}
              handleSource={handleSource}
              onNewCard={onNewCard}
              toSave={toSave}
              requirements={requirements}
              businessId={businessId}
              handleCancel={onCancel}
              paymethod={paymethod}
              handlePlaceOrder={handlePlaceOrder}
            />
          ) : (
            <CardForm
              handleSource={handleSource}
              onNewCard={onNewCard}
              toSave={toSave}
              isSplitForm
              requirements={requirements}
              businessId={businessId}
              handleCancel={onCancel}
              businessIds={props.businessIds}
            />
          )}
        </Elements>
      ) : (
        <ErrorMessage>{t('SOMETHING_WRONG', 'Something is wrong!')}</ErrorMessage>
      )}
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}

export const StripeElementsForm = (props) => {
  const stripeElementsFormProps = {
    ...props,
    UIComponent: StripeElementsFormUI
  }
  return <StripeElementsFormController {...stripeElementsFormProps} />
}
