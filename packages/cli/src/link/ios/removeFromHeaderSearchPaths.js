/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import mapHeaderSearchPaths from './mapHeaderSearchPaths';

/**
 * Given Xcode project and absolute path, it makes sure there are no headers referring to it
 */
export default function addToHeaderSearchPaths(project, path) {
  mapHeaderSearchPaths(project, searchPaths =>
    searchPaths.filter(searchPath => searchPath !== path)
  );
}
