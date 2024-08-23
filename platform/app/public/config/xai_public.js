/** @type {AppTypes.Config} */
window.config = {
  routerBasename: '/',
  whiteLabeling: {
    // CWI/LUMC branding
    createLogoComponentFn: function (React) {
      return React.createElement('a', {
        target: '_self',
        rel: 'noopener noreferrer',
        className: 'h-8 flex gap-1 align-center',
        href: '/',
        dangerouslySetInnerHTML: {
          __html: `
            <svg width="auto" height="100%" viewBox="0 0 484 285" fill="#CE0538" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.00999272 1.43884C0.601564 3.72406 95.3375 215.318 96.0136 215.995C96.2671 216.334 183.651 197.714 290.049 174.523L483.577 132.373L483.831 66.1867L484 1.74409e-06H241.794C11.5034 1.74409e-06 -0.412558 0.0846395 0.00999272 1.43884ZM155.086 33.0933C160.326 34.5322 162.101 34.7015 166.157 34.0244C169.03 33.5165 171.481 33.5165 172.326 33.9397C174.693 35.2093 175.538 40.2876 175.538 52.8139C175.538 66.1021 174.946 67.7102 170.045 67.7102C166.495 67.7102 164.72 65.5942 163.706 60.0081C162.439 53.4064 159.565 48.1589 156.1 46.1276C151.706 43.5884 140.973 43.7577 135.987 46.3815C127.789 50.7826 123.986 60.3467 123.395 78.2899C122.634 100.042 127.198 114.007 136.748 118.916C139.79 120.524 145.537 120.778 149.509 119.424C153.819 117.985 159.903 111.299 162.946 104.528C166.157 97.2487 167.509 95.6406 170.467 95.6406C174.777 95.6406 175.96 98.1798 175.876 107.828C175.876 118.324 174.524 121.54 168.946 125.179C149.762 137.452 129.649 136.436 116.888 122.64C108.183 113.245 104.634 103.258 103.958 85.8226C103.366 72.1113 104.887 63.4783 109.535 53.745C114.69 42.9113 121.536 36.3942 131.001 32.9241C137.086 30.8081 147.058 30.8081 155.086 33.0933ZM217.708 35.04C219.906 37.0713 219.99 40.6261 217.962 43.1652C216.779 44.6887 215.258 45.1965 211.624 45.5351C207.06 45.8736 206.806 46.0429 206.806 48.1589C206.891 52.8139 214.074 103.597 214.581 102.835C214.835 102.327 217.201 95.4713 219.821 87.4308C225.145 71.265 226.751 68.5566 230.554 68.5566C236.301 68.5566 236.639 69.149 243.991 89.716C246.864 97.8412 249.569 104.781 249.822 105.12C250.16 105.543 251.681 93.8632 253.203 79.3055C254.724 64.8325 256.16 51.2905 256.414 49.2592L256.921 45.7044H251.935C246.104 45.7044 243.146 44.4348 241.625 41.3032C240.188 38.2562 241.709 35.04 245.09 33.8551C248.386 32.7548 272.555 32.7548 275.936 33.9397C278.894 34.9554 280.753 38.6794 279.992 41.8957C279.401 44.1809 276.612 45.7044 273.147 45.7044C271.71 45.7044 270.95 46.2968 270.696 47.5664C270.443 48.6667 268.161 66.4406 265.541 87.1768C259.879 132.966 260.386 130.088 257.935 132.543C255.062 135.42 248.893 135.42 246.273 132.543C245.174 131.358 241.625 122.471 237.737 111.299L230.976 92.0012L224.554 111.299C217.286 132.881 216.272 134.574 210.102 134.574C205.623 134.574 203.511 133.389 202.243 130.088C201.651 128.565 198.355 109.013 194.891 86.5844L188.721 45.8736L185.679 45.3658C181.622 44.6887 179.594 42.4035 179.932 38.7641C180.101 36.5635 180.777 35.6325 183.144 34.4476C185.679 33.178 188.045 33.0087 200.975 33.178C214.328 33.4319 216.103 33.6012 217.708 35.04ZM345.488 35.4632C347.516 38.0023 347.516 40.7107 345.488 43.2499C343.967 45.1119 343.121 45.2812 334.924 45.5351L325.966 45.8736V82.6064V119.339H335.854C344.812 119.339 345.91 119.508 347.685 121.201C350.136 123.486 350.22 127.21 347.77 129.496C345.995 131.104 344.981 131.188 318.022 131.188C290.556 131.188 290.134 131.188 288.19 129.326C285.739 127.041 285.739 123.825 288.105 121.286C289.796 119.508 290.641 119.339 299.092 119.339H308.219V82.5218V45.7044H299.345C290.979 45.7044 290.303 45.5351 288.359 43.5884C285.147 40.4568 285.908 35.4632 289.88 33.8551C290.894 33.4319 303.486 33.178 317.768 33.2626L343.882 33.4319L345.488 35.4632Z"/>
            </svg>
            <svg width="auto" height="100%" viewBox="0 0 41 41" fill="#fff" xmlns="http://www.w3.org/2000/svg">
              <path d="M31.48 37.605c-4.543 0-6.847-2.242-6.847-6.663 0-4.164 2.688-6.919 6.783-6.919 1.983 0 2.815.32 3.455.577l.256.064v2.819h-.896c-.448-1.217-1.088-2.242-2.943-2.242-3.072 0-4.863 1.986-4.863 5.38 0 3.396 1.92 5.382 5.247 5.382 1.6 0 2.43-.576 3.007-.705l.448 1.09c.064.064-1.344 1.217-3.647 1.217zM15.228 16.848H5.183c-.064-.256-.064-.704-.064-.96l1.28-.32c.447-.065.767-.577.767-1.09l.064-2.755v-5.83c0-.448-.192-1.024-.576-1.216l-1.28-.32c0-.193 0-.577.065-.77h4.926c.064.257.064.577.064.833l-.896.257c-.575 0-.767.064-.767.704v6.342l.064 3.844 3.519-.064c1.151 0 1.92-.833 2.24-1.858l.83.193-.191 3.01zM20.475 0v20.5h20.474V0H20.475zm16.06 4.805c-.257.064-.449.192-.449.768v6.343c0 3.843-2.815 5.189-5.182 5.189-2.496 0-5.183-.961-5.183-4.677V5.702c0-.449-.192-.833-.576-.961l-1.151-.449c0-.192 0-.512.064-.769h4.99c.064.257.064.577 0 .833l-1.087.256c-.32.065-.448.257-.448.577v6.855c0 2.626 1.855 3.523 3.455 3.523 1.983 0 3.327-1.025 3.327-4.036V5.894c0-.577-.192-1.025-1.024-1.282l-.832-.256v-.768h4.863c.064.256.064.512.064.768l-.832.449zM0 20.5V41h20.475V20.5H0zm17.531 16.656h-4.35c0-.256-.065-.576-.065-.768l.768-.257c.576-.192.64-.704.64-1.281 0-.256 0-.448-.064-.705l-.192-6.086-.064-.96h-.128l-3.647 7.687H9.278L6.014 26.97h.064v.961l-.64 7.24c-.063.32 0 .512.192.576l1.664.512c0 .193 0 .705-.064.833H2.751c0-.256-.064-.512 0-.769l.64-.32c.448-.256.832-.833.896-1.345l.832-8.136c.064-.449-.192-.833-.448-1.025l-1.088-.32c0-.193 0-.513.064-.77h3.327l3.2 8.137h.191l3.647-8.136h3.2c.063.256.063.448.063.704l-.831.32c-.32.193-.768.577-.64 1.474l.64 8.2c.064.449.32.769.64.961l.767.449c-.192-.064-.192.448-.32.64z"/>
            </svg>
            `,
        },
      });
    },
  },
  showStudyList: false, // ! needed to be able to override the default worklist
  extensions: [],
  modes: [],
  xai: {
    url: 'http://localhost:1337',
  },
  customizationService: [
    'ohif-extension-xai.customizationModule.routes',
    '@ohif/extension-cornerstone.customizationModule.cornerstoneDicomUploadComponent',
  ],
  investigationalUseDialog: {
    option: 'never',
  },
  // below flag is for performance reasons, but it might not work for all servers
  showWarningMessageForCrossOrigin: true,
  showCPUFallbackMessage: true,
  showLoadingIndicator: true,
  strictZSpacingForVolumeViewport: true,
  groupEnabledModesFirst: true,
  maxNumRequests: {
    interaction: 100,
    thumbnail: 75,
    // Prefetch number is dependent on the http protocol. For http 2 or
    // above, the number of requests can be go a lot higher.
    prefetch: 25,
  },
  defaultDataSourceName: 'dicomweb',
  dataSources: [
    {
      friendlyName: 'Orthanc Public Demo',
      namespace: '@ohif/extension-default.dataSourcesModule.dicomweb',
      sourceName: 'dicomweb',
      configuration: {
        name: 'orthanc',
        // wadoUriRoot: '/wado',
        // qidoRoot: '/dicom-web',
        // wadoRoot: '/dicom-web',
        wadoUriRoot: 'https://orthanc.kurodoko.xyz/dicom-web',
        qidoRoot: 'https://orthanc.kurodoko.xyz/dicom-web',
        wadoRoot: 'https://orthanc.kurodoko.xyz/dicom-web',
        // TODO use nginx as reverse proxy...
        // wadoUriRoot: 'http://localhost:8042/dicom-web',
        // qidoRoot: 'http://localhost:8042/dicom-web',
        // wadoRoot: 'http://localhost:8042/dicom-web',
        qidoSupportsIncludeField: false,
        omitQuotationForMultipartRequest: true,
        supportsReject: false,
        imageRendering: 'wadors',
        thumbnailRendering: 'wadors',
        enableStudyLazyLoad: true,
        supportsFuzzyMatching: false,
        supportsWildcard: true,
        staticWado: true,
        singlepart: 'bulkdata,video',
        // singlepart: 'video',
        acceptHeader: [
          'multipart/related; type=application/pdf; transfer-syntax=*',
          'multipart/related; type=application/octet-stream; transfer-syntax=*',
        ],
        bulkDataURI: {
          enabled: true,
          relativeResolution: 'studies',
          // relativeResolution: 'series',
          // relativeResolution: 'instances',
          // In this scenario, Orthanc is not aware that is being served at http://localhost/orthanc/ so we must tell OHIF to fix
          // the bulkDataURI
          // startsWith: 'http://localhost:3000/',
          // In this case the webpack URL rewrite happens first?, so we need to use the IP
          startsWith: 'http://127.0.0.1/',
          prefixWith: 'https://orthanc.kurodoko.xyz/',
        },
        // !TODO
        dicomUploadEnabled: false,
      },
    },
    {
      namespace: '@ohif/extension-default.dataSourcesModule.dicomjson',
      sourceName: 'dicomjson',
      configuration: {
        friendlyName: 'dicom json',
        name: 'json',
      },
    },
    {
      namespace: '@ohif/extension-default.dataSourcesModule.dicomlocal',
      sourceName: 'dicomlocal',
      configuration: {
        friendlyName: 'dicom local',
      },
    },
  ],
  hotkeys: [
    {
      commandName: 'incrementActiveViewport',
      label: 'Next Viewport',
      keys: ['right'],
    },
    {
      commandName: 'decrementActiveViewport',
      label: 'Previous Viewport',
      keys: ['left'],
    },
    { commandName: 'rotateViewportCW', label: 'Rotate Right', keys: ['r'] },
    { commandName: 'rotateViewportCCW', label: 'Rotate Left', keys: ['l'] },
    { commandName: 'invertViewport', label: 'Invert', keys: ['i'] },
    {
      commandName: 'flipViewportHorizontal',
      label: 'Flip Horizontally',
      keys: ['h'],
    },
    {
      commandName: 'flipViewportVertical',
      label: 'Flip Vertically',
      keys: ['v'],
    },
    { commandName: 'scaleUpViewport', label: 'Zoom In', keys: ['+'] },
    { commandName: 'scaleDownViewport', label: 'Zoom Out', keys: ['-'] },
    { commandName: 'fitViewportToWindow', label: 'Zoom to Fit', keys: ['='] },
    { commandName: 'resetViewport', label: 'Reset', keys: ['space'] },
    { commandName: 'nextImage', label: 'Next Image', keys: ['down'] },
    { commandName: 'previousImage', label: 'Previous Image', keys: ['up'] },
    // {
    //   commandName: 'previousViewportDisplaySet',
    //   label: 'Previous Series',
    //   keys: ['pagedown'],
    // },
    // {
    //   commandName: 'nextViewportDisplaySet',
    //   label: 'Next Series',
    //   keys: ['pageup'],
    // },
    {
      commandName: 'setToolActive',
      commandOptions: { toolName: 'Zoom' },
      label: 'Zoom',
      keys: ['z'],
    },
    // ~ Window level presets
    {
      commandName: 'windowLevelPreset1',
      label: 'W/L Preset 1',
      keys: ['1'],
    },
    {
      commandName: 'windowLevelPreset2',
      label: 'W/L Preset 2',
      keys: ['2'],
    },
    {
      commandName: 'windowLevelPreset3',
      label: 'W/L Preset 3',
      keys: ['3'],
    },
    {
      commandName: 'windowLevelPreset4',
      label: 'W/L Preset 4',
      keys: ['4'],
    },
    {
      commandName: 'windowLevelPreset5',
      label: 'W/L Preset 5',
      keys: ['5'],
    },
    {
      commandName: 'windowLevelPreset6',
      label: 'W/L Preset 6',
      keys: ['6'],
    },
    {
      commandName: 'windowLevelPreset7',
      label: 'W/L Preset 7',
      keys: ['7'],
    },
    {
      commandName: 'windowLevelPreset8',
      label: 'W/L Preset 8',
      keys: ['8'],
    },
    {
      commandName: 'windowLevelPreset9',
      label: 'W/L Preset 9',
      keys: ['9'],
    },
  ],
};
