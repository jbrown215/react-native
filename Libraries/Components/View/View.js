/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow strict-local
 */

import type {ViewProps} from './ViewPropTypes';

import ViewNativeComponent from './ViewNativeComponent';
import TextAncestor from '../../Text/TextAncestor';
import * as React from 'react';
import processLayoutProps from '../../StyleSheet/processStyle';

export type Props = ViewProps;

/**
 * The most fundamental component for building a UI, View is a container that
 * supports layout with flexbox, style, some touch handling, and accessibility
 * controls.
 *
 * @see https://reactnative.dev/docs/view
 */
const View: React.AbstractComponent<
  ViewProps,
  React.ElementRef<typeof ViewNativeComponent>,
> = React.forwardRef(
  ({tabIndex, focusable, style, ...otherProps}: ViewProps, forwardedRef) => {
    const processedStyle = processLayoutProps(style);
    return (
      <TextAncestor.Provider value={false}>
        <ViewNativeComponent
          focusable={tabIndex !== undefined ? !tabIndex : focusable}
          style={processedStyle}
          {...otherProps}
          ref={forwardedRef}
        />
      </TextAncestor.Provider>
    );
  },
);

View.displayName = 'View';

module.exports = View;
