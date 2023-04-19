import React, { useState, useRef } from 'react';
import classnames from 'classnames';
import { Form, MessagePlugin, Input, Checkbox, Button, FormInstanceFunctions, SubmitContext } from 'tdesign-react';
import { LockOnIcon, UserIcon, MailIcon, BrowseOffIcon, BrowseIcon } from 'tdesign-icons-react';
import useCountdown from '../../hooks/useCountDown';

import Style from './index.module.less';

const { FormItem } = Form;

export type ERegisterType = 'email';

export default function Register() {
  const [registerType, changeRegisterType] = useState('email');
  const [showPsw, toggleShowPsw] = useState(false);
  const { countdown, setupCountdown } = useCountdown(60);
  const formRef = useRef<FormInstanceFunctions>();

  const onSubmit = (e: SubmitContext) => {
    if (e.validateResult === true) {
      const { checked } = formRef.current?.getFieldsValue?.(['checked']) as { checked: boolean };
      if (!checked) {
        MessagePlugin.error('Please agree to the Richie Service Agreement and Richie Privacy Statement');
        return;
      }
      MessagePlugin.success('Register successfully');
    }
  };

  const switchType = (val: ERegisterType) => {
    formRef.current?.reset?.();
    changeRegisterType(val);
  };

  return (
    <div>
      <Form
        ref={formRef}
        className={classnames(Style.itemContainer, `register-${registerType}`)}
        labelWidth={0}
        onSubmit={onSubmit}
      >

        {registerType === 'email' && (
          <FormItem
            name='email'
            rules={[
              { required: true, message: 'E-mail required', type: 'error' },
              { email: true, message: 'Please enter the correct email address', type: 'warning' },
            ]}
          >
            <Input type='text' size='large' placeholder='Please enter your email address' prefixIcon={<MailIcon />} />
          </FormItem>
        )}

        <FormItem name='password' rules={[{ required: true, message: 'Password required', type: 'error' }]}>
          <Input
            size='large'
            type={showPsw ? 'text' : 'password'}
            clearable
            placeholder='Please enter your login password'
            prefixIcon={<LockOnIcon />}
            suffixIcon={
              showPsw ? (
                <BrowseIcon onClick={() => toggleShowPsw((current) => !current)} />
              ) : (
                <BrowseOffIcon onClick={() => toggleShowPsw((current) => !current)} />
              )
            }
          />
        </FormItem>
        <FormItem className={Style.checkContainer} name='checked' initialData={false}>
          <Checkbox>I have read and agree to </Checkbox> <span className='tip'>Richie Service Agreement</span> and
          <span className='tip'>Richie Privacy Statement</span>
        </FormItem>
        <FormItem>
          <Button block size='large' type='submit'>
            Register
          </Button>
        </FormItem>
        <div className={Style.switchContainer}>
          <span className={Style.switchTip} onClick={() => switchType(registerType === 'email' ? 'email' : 'email')}>
            {registerType === 'email' ? 'Register with email' : 'Register with email'}
          </span>
        </div>
      </Form>
    </div>
  );
}
