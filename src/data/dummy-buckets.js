import Bucket from '../models/Bucket';

const data = [
  {
    status: 'success',
    type: 'folder',
    lastModified: '2021-12-15T10:52:50.102Z',
    size: 0,
    key: 'EKYC/',
    etag: '',
    url: 'https://bucket.pegadaian.co.id/',
    versionOrdinal: 1
  },
  {
    status: 'success',
    type: 'folder',
    lastModified: '2022-02-23T02:48:06.048Z',
    size: 0,
    key: 'agen-konven-bucket-dev/',
    etag: '',
    url: 'https://bucket.pegadaian.co.id/',
    versionOrdinal: 1
  },
  {
    status: 'success',
    type: 'folder',
    lastModified: '2021-11-01T02:08:10.036Z',
    size: 0,
    key: 'app-fleet-bucket/',
    etag: '',
    url: 'https://bucket.pegadaian.co.id/',
    versionOrdinal: 1
  },
  {
    status: 'success',
    type: 'folder',
    lastModified: '2021-09-27T08:04:18.557Z',
    size: 0,
    key: 'bareksa-bucket/',
    etag: '',
    url: 'https://bucket.pegadaian.co.id/',
    versionOrdinal: 1
  },
  {
    status: 'success',
    type: 'folder',
    lastModified: '2022-09-07T09:05:32.915Z',
    size: 0,
    key: 'bucket-123/',
    etag: '',
    url: 'https://bucket.pegadaian.co.id/',
    versionOrdinal: 1
  },
  {
    status: 'success',
    type: 'folder',
    lastModified: '2022-09-07T09:26:12.328Z',
    size: 0,
    key: 'bucket-5132/',
    etag: '',
    url: 'https://bucket.pegadaian.co.id/',
    versionOrdinal: 1
  },
  {
    status: 'success',
    type: 'folder',
    lastModified: '2022-10-18T04:28:54.049Z',
    size: 0,
    key: 'bullion-bucket/',
    etag: '',
    url: 'https://bucket.pegadaian.co.id/',
    versionOrdinal: 1
  },
  {
    status: 'success',
    type: 'folder',
    lastModified: '2022-10-18T04:21:56.061Z',
    size: 0,
    key: 'bullion-bucket-dev/',
    etag: '',
    url: 'https://bucket.pegadaian.co.id/',
    versionOrdinal: 1
  },
  {
    status: 'success',
    type: 'folder',
    lastModified: '2021-07-05T06:08:04.228Z',
    size: 0,
    key: 'c-talk-bucket-dev/',
    etag: '',
    url: 'https://bucket.pegadaian.co.id/',
    versionOrdinal: 1
  },
  {
    status: 'success',
    type: 'folder',
    lastModified: '2022-07-22T02:25:17.781Z',
    size: 0,
    key: 'c-test/',
    etag: '',
    url: 'https://bucket.pegadaian.co.id/',
    versionOrdinal: 1
  },
  {
    status: 'success',
    type: 'folder',
    lastModified: '2022-07-06T04:56:09.171Z',
    size: 0,
    key: 'centralized-data-bucket-dev/',
    etag: '',
    url: 'https://bucket.pegadaian.co.id/',
    versionOrdinal: 1
  },
  {
    status: 'success',
    type: 'folder',
    lastModified: '2022-07-06T04:32:00.046Z',
    size: 0,
    key: 'chamaga-bucket/',
    etag: '',
    url: 'https://bucket.pegadaian.co.id/',
    versionOrdinal: 1
  },
  {
    status: 'success',
    type: 'folder',
    lastModified: '2022-09-08T04:50:31.372Z',
    size: 0,
    key: 'chamaga-bucket-dev/',
    etag: '',
    url: 'https://bucket.pegadaian.co.id/',
    versionOrdinal: 1
  },
  {
    status: 'success',
    type: 'folder',
    lastModified: '2022-08-23T03:21:27.457Z',
    size: 0,
    key: 'cimb-bucket/',
    etag: '',
    url: 'https://bucket.pegadaian.co.id/',
    versionOrdinal: 1
  },
  {
    status: 'success',
    type: 'folder',
    lastModified: '2021-11-08T08:25:08.801Z',
    size: 0,
    key: 'cms-webcorp-bucket/',
    etag: '',
    url: 'https://bucket.pegadaian.co.id/',
    versionOrdinal: 1
  },
  {
    status: 'success',
    type: 'folder',
    lastModified: '2021-03-17T07:41:28.308Z',
    size: 0,
    key: 'coe/',
    etag: '',
    url: 'https://bucket.pegadaian.co.id/',
    versionOrdinal: 1
  },
  {
    status: 'success',
    type: 'folder',
    lastModified: '2021-11-02T05:13:20.62Z',
    size: 0,
    key: 'collateral-bucket-dev/',
    etag: '',
    url: 'https://bucket.pegadaian.co.id/',
    versionOrdinal: 1
  },
  {
    status: 'success',
    type: 'folder',
    lastModified: '2021-07-14T03:11:09.411Z',
    size: 0,
    key: 'ctalk/',
    etag: '',
    url: 'https://bucket.pegadaian.co.id/',
    versionOrdinal: 1
  },
  {
    status: 'success',
    type: 'folder',
    lastModified: '2021-12-28T02:49:40.309Z',
    size: 0,
    key: 'culture-performance-bucket/',
    etag: '',
    url: 'https://bucket.pegadaian.co.id/',
    versionOrdinal: 1
  },
  {
    status: 'success',
    type: 'folder',
    lastModified: '2022-09-16T06:48:03.512Z',
    size: 0,
    key: 'customer-consent-bucket/',
    etag: '',
    url: 'https://bucket.pegadaian.co.id/',
    versionOrdinal: 1
  },
  {
    status: 'success',
    type: 'folder',
    lastModified: '2021-12-14T09:43:17.827Z',
    size: 0,
    key: 'design-system-salt-bucket/',
    etag: '',
    url: 'https://bucket.pegadaian.co.id/',
    versionOrdinal: 1
  },
  {
    status: 'success',
    type: 'folder',
    lastModified: '2021-11-24T04:16:29.593Z',
    size: 0,
    key: 'dev/',
    etag: '',
    url: 'https://bucket.pegadaian.co.id/',
    versionOrdinal: 1
  },
  {
    status: 'success',
    type: 'folder',
    lastModified: '2022-09-14T11:53:28.932Z',
    size: 0,
    key: 'digital-bucket-dev/',
    etag: '',
    url: 'https://bucket.pegadaian.co.id/',
    versionOrdinal: 1
  },
  {
    status: 'success',
    type: 'folder',
    lastModified: '2021-12-07T08:46:11.237Z',
    size: 0,
    key: 'digital-bucket-prod/',
    etag: '',
    url: 'https://bucket.pegadaian.co.id/',
    versionOrdinal: 1
  },
  {
    status: 'success',
    type: 'folder',
    lastModified: '2022-07-25T07:36:56.549Z',
    size: 0,
    key: 'digital-bucket-prod-public/',
    etag: '',
    url: 'https://bucket.pegadaian.co.id/',
    versionOrdinal: 1
  },
  {
    status: 'success',
    type: 'folder',
    lastModified: '2022-03-13T07:42:10.818Z',
    size: 0,
    key: 'e-form-bucket/',
    etag: '',
    url: 'https://bucket.pegadaian.co.id/',
    versionOrdinal: 1
  },
  {
    status: 'success',
    type: 'folder',
    lastModified: '2022-03-13T07:42:22.24Z',
    size: 0,
    key: 'e-form-bucket-dev/',
    etag: '',
    url: 'https://bucket.pegadaian.co.id/',
    versionOrdinal: 1
  },
  {
    status: 'success',
    type: 'folder',
    lastModified: '2022-07-22T02:33:32.115Z',
    size: 0,
    key: 'ecdd-channel-bucket/',
    etag: '',
    url: 'https://bucket.pegadaian.co.id/',
    versionOrdinal: 1
  },
  {
    status: 'success',
    type: 'folder',
    lastModified: '2021-11-01T02:59:58.045Z',
    size: 0,
    key: 'ecdd-channel-bucket-dev/',
    etag: '',
    url: 'https://bucket.pegadaian.co.id/',
    versionOrdinal: 1
  },
  {
    status: 'success',
    type: 'folder',
    lastModified: '2022-05-09T07:18:47.893Z',
    size: 0,
    key: 'gamification-emas/',
    etag: '',
    url: 'https://bucket.pegadaian.co.id/',
    versionOrdinal: 1
  },
  {
    status: 'success',
    type: 'folder',
    lastModified: '2022-07-25T02:08:54.91Z',
    size: 0,
    key: 'glaw-bucket/',
    etag: '',
    url: 'https://bucket.pegadaian.co.id/',
    versionOrdinal: 1
  },
  {
    status: 'success',
    type: 'folder',
    lastModified: '2022-07-25T02:08:47.451Z',
    size: 0,
    key: 'glaw-bucket-dev/',
    etag: '',
    url: 'https://bucket.pegadaian.co.id/',
    versionOrdinal: 1
  },
  {
    status: 'success',
    type: 'folder',
    lastModified: '2022-07-18T09:11:09.981Z',
    size: 0,
    key: 'hcms-bucket/',
    etag: '',
    url: 'https://bucket.pegadaian.co.id/',
    versionOrdinal: 1
  },
  {
    status: 'success',
    type: 'folder',
    lastModified: '2022-07-18T09:10:54.131Z',
    size: 0,
    key: 'hcms-bucket-dev/',
    etag: '',
    url: 'https://bucket.pegadaian.co.id/',
    versionOrdinal: 1
  },
  {
    status: 'success',
    type: 'folder',
    lastModified: '2022-07-12T08:20:11.743Z',
    size: 0,
    key: 'iais-bucket/',
    etag: '',
    url: 'https://bucket.pegadaian.co.id/',
    versionOrdinal: 1
  },
  {
    status: 'success',
    type: 'folder',
    lastModified: '2022-03-03T07:26:59.043Z',
    size: 0,
    key: 'ileads-bucket/',
    etag: '',
    url: 'https://bucket.pegadaian.co.id/',
    versionOrdinal: 1
  },
  {
    status: 'success',
    type: 'folder',
    lastModified: '2022-09-15T07:40:03.059Z',
    size: 0,
    key: 'kamila-bucket/',
    etag: '',
    url: 'https://bucket.pegadaian.co.id/',
    versionOrdinal: 1
  },
  {
    status: 'success',
    type: 'folder',
    lastModified: '2022-03-19T05:51:20.49Z',
    size: 0,
    key: 'kredit-pdf-bucket/',
    etag: '',
    url: 'https://bucket.pegadaian.co.id/',
    versionOrdinal: 1
  },
  {
    status: 'success',
    type: 'folder',
    lastModified: '2022-03-19T05:51:32.09Z',
    size: 0,
    key: 'kredit-pdf-bucket-dev/',
    etag: '',
    url: 'https://bucket.pegadaian.co.id/',
    versionOrdinal: 1
  },
  {
    status: 'success',
    type: 'folder',
    lastModified: '2022-03-31T03:51:18.201Z',
    size: 0,
    key: 'kredit-pdf-dev/',
    etag: '',
    url: 'https://bucket.pegadaian.co.id/',
    versionOrdinal: 1
  },
  {
    status: 'success',
    type: 'folder',
    lastModified: '2022-08-19T02:28:16.861Z',
    size: 0,
    key: 'learning-wallet-bucket/',
    etag: '',
    url: 'https://bucket.pegadaian.co.id/',
    versionOrdinal: 1
  },
  {
    status: 'success',
    type: 'folder',
    lastModified: '2022-08-04T03:20:46.757Z',
    size: 0,
    key: 'learning-wallet-bucket-dev/',
    etag: '',
    url: 'https://bucket.pegadaian.co.id/',
    versionOrdinal: 1
  },
  {
    status: 'success',
    type: 'folder',
    lastModified: '2022-03-19T05:48:59.155Z',
    size: 0,
    key: 'los-survey-bucket/',
    etag: '',
    url: 'https://bucket.pegadaian.co.id/',
    versionOrdinal: 1
  },
  {
    status: 'success',
    type: 'folder',
    lastModified: '2022-03-19T05:49:09.353Z',
    size: 0,
    key: 'los-survey-bucket-dev/',
    etag: '',
    url: 'https://bucket.pegadaian.co.id/',
    versionOrdinal: 1
  },
  {
    status: 'success',
    type: 'folder',
    lastModified: '2022-03-21T10:34:00.056Z',
    size: 0,
    key: 'los-survey-thumbnail-bucket/',
    etag: '',
    url: 'https://bucket.pegadaian.co.id/',
    versionOrdinal: 1
  },
  {
    status: 'success',
    type: 'folder',
    lastModified: '2022-03-21T10:33:50.444Z',
    size: 0,
    key: 'los-survey-thumbnail-bucket-dev/',
    etag: '',
    url: 'https://bucket.pegadaian.co.id/',
    versionOrdinal: 1
  },
  {
    status: 'success',
    type: 'folder',
    lastModified: '2022-04-06T03:25:10.152Z',
    size: 0,
    key: 'lowcode-bucket/',
    etag: '',
    url: 'https://bucket.pegadaian.co.id/',
    versionOrdinal: 1
  },
  {
    status: 'success',
    type: 'folder',
    lastModified: '2022-10-24T04:40:46.78Z',
    size: 0,
    key: 'maybank-bucket/',
    etag: '',
    url: 'https://bucket.pegadaian.co.id/',
    versionOrdinal: 1
  },
  {
    status: 'success',
    type: 'folder',
    lastModified: '2022-03-31T02:59:14.877Z',
    size: 0,
    key: 'moving_bucket/',
    etag: '',
    url: 'https://bucket.pegadaian.co.id/',
    versionOrdinal: 1
  },
  {
    status: 'success',
    type: 'folder',
    lastModified: '2022-03-19T05:48:32.743Z',
    size: 0,
    key: 'pefindo-report-bucket/',
    etag: '',
    url: 'https://bucket.pegadaian.co.id/',
    versionOrdinal: 1
  },
  {
    status: 'success',
    type: 'folder',
    lastModified: '2022-03-19T05:48:49.996Z',
    size: 0,
    key: 'pefindo-report-bucket-dev/',
    etag: '',
    url: 'https://bucket.pegadaian.co.id/',
    versionOrdinal: 1
  },
  {
    status: 'success',
    type: 'folder',
    lastModified: '2021-06-23T06:52:06.754Z',
    size: 0,
    key: 'ppid-bucket/',
    etag: '',
    url: 'https://bucket.pegadaian.co.id/',
    versionOrdinal: 1
  },
  {
    status: 'success',
    type: 'folder',
    lastModified: '2021-09-16T02:21:13.577Z',
    size: 0,
    key: 'prisma-bucket/',
    etag: '',
    url: 'https://bucket.pegadaian.co.id/',
    versionOrdinal: 1
  },
  {
    status: 'success',
    type: 'folder',
    lastModified: '2021-09-16T02:18:00.899Z',
    size: 0,
    key: 'prisma-bucket-dev/',
    etag: '',
    url: 'https://bucket.pegadaian.co.id/',
    versionOrdinal: 1
  },
  {
    status: 'success',
    type: 'folder',
    lastModified: '2022-09-21T09:56:51.789Z',
    size: 0,
    key: 'prospek-bucket-dev/',
    etag: '',
    url: 'https://bucket.pegadaian.co.id/',
    versionOrdinal: 1
  },
  {
    status: 'success',
    type: 'folder',
    lastModified: '2022-09-21T09:57:06.352Z',
    size: 0,
    key: 'prospek-thumbnail-bucket-dev/',
    etag: '',
    url: 'https://bucket.pegadaian.co.id/',
    versionOrdinal: 1
  },
  {
    status: 'success',
    type: 'folder',
    lastModified: '2021-05-27T06:06:26.192Z',
    size: 0,
    key: 'rumah-inovasi-dev/',
    etag: '',
    url: 'https://bucket.pegadaian.co.id/',
    versionOrdinal: 1
  },
  {
    status: 'success',
    type: 'folder',
    lastModified: '2022-04-14T04:47:05.106Z',
    size: 0,
    key: 'senyum-mobile/',
    etag: '',
    url: 'https://bucket.pegadaian.co.id/',
    versionOrdinal: 1
  },
  {
    status: 'success',
    type: 'folder',
    lastModified: '2022-01-12T07:29:38.105Z',
    size: 0,
    key: 'sharing-kyc-dev/',
    etag: '',
    url: 'https://bucket.pegadaian.co.id/',
    versionOrdinal: 1
  },
  {
    status: 'success',
    type: 'folder',
    lastModified: '2021-03-17T08:00:27.232Z',
    size: 0,
    key: 'support/',
    etag: '',
    url: 'https://bucket.pegadaian.co.id/',
    versionOrdinal: 1
  },
  {
    status: 'success',
    type: 'folder',
    lastModified: '2021-05-07T03:57:35.711Z',
    size: 0,
    key: 'support-01/',
    etag: '',
    url: 'https://bucket.pegadaian.co.id/',
    versionOrdinal: 1
  },
  {
    status: 'success',
    type: 'folder',
    lastModified: '2021-11-15T03:37:23.214Z',
    size: 0,
    key: 'surrounding-bucket-dev/',
    etag: '',
    url: 'https://bucket.pegadaian.co.id/',
    versionOrdinal: 1
  },
  {
    status: 'success',
    type: 'folder',
    lastModified: '2022-09-08T08:51:33.171Z',
    size: 0,
    key: 'synthetic-apm-bucket-dev/',
    etag: '',
    url: 'https://bucket.pegadaian.co.id/',
    versionOrdinal: 1
  },
  {
    status: 'success',
    type: 'folder',
    lastModified: '2022-02-15T06:09:11.642Z',
    size: 0,
    key: 'tmp-bucket/',
    etag: '',
    url: 'https://bucket.pegadaian.co.id/',
    versionOrdinal: 1
  },
  {
    status: 'success',
    type: 'folder',
    lastModified: '2022-02-11T03:58:03.169Z',
    size: 0,
    key: 'traveloka-bucket/',
    etag: '',
    url: 'https://bucket.pegadaian.co.id/',
    versionOrdinal: 1
  },
  {
    status: 'success',
    type: 'folder',
    lastModified: '2021-10-31T16:19:32.738Z',
    size: 0,
    key: 'val-it-bucket/',
    etag: '',
    url: 'https://bucket.pegadaian.co.id/',
    versionOrdinal: 1
  },
  {
    status: 'success',
    type: 'folder',
    lastModified: '2021-10-31T16:19:22.434Z',
    size: 0,
    key: 'val-it-bucket-dev/',
    etag: '',
    url: 'https://bucket.pegadaian.co.id/',
    versionOrdinal: 1
  },
  {
    status: 'success',
    type: 'folder',
    lastModified: '2021-12-01T10:32:53.879Z',
    size: 0,
    key: 'velero/',
    etag: '',
    url: 'https://bucket.pegadaian.co.id/',
    versionOrdinal: 1
  },
  {
    status: 'success',
    type: 'folder',
    lastModified: '2022-10-17T04:33:37.633Z',
    size: 0,
    key: 'webcorp-syar-bucket/',
    etag: '',
    url: 'https://bucket.pegadaian.co.id/',
    versionOrdinal: 1
  }
];

const dummyBuckets = data.map((bucket) => new Bucket(bucket.key, bucket.lastModified));

export default dummyBuckets;
