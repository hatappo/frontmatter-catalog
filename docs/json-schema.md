# JSON Schema

## Built-in Formats

https://json-schema.org/understanding-json-schema/reference/type#built-in-formats

`"date-time"`Date and time together, for example, `2018-11-13T20:20:39+00:00`.
`"time"`info yellowNew in draft 7 Time, for example, `20:20:39+00:00`.
`"date"`info yellowNew in draft 7 Date, for example, `2018-11-13`.
`"duration"`info yellowNew in draft 2019-09 A duration as defined by the ISO 8601 ABNF for "duration". For example, P3D expresses a duration of 3 days.

`"email"`Internet email address, see RFC 5321, section 4.1.2.
`"idn-email"`info yellowNew in draft 7 The internationalized form of an Internet email address, see RFC 6531.

`"hostname"`Internet host name, see RFC 1123, section 2.1.
`"idn-hostname"`info yellowNew in draft 7 An internationalized Internet host name, see RFC5890, section 2.3.2.3.

`"ipv4"`IPv4 address, according to dotted-quad ABNF syntax as defined in RFC 2673, section 3.2.
`"ipv6"`IPv6 address, as defined in RFC 2373, section 2.2.

`"uuid"`info yellowNew in draft 2019-09 A Universally Unique Identifier as defined by RFC 4122. Example: `3e4666bf-d5e5-4aa7-b8ce-cefe41c7568a`.
`"uri"`A universal resource identifier (URI), according to RFC3986.
`"uri-reference"`info yellowNew in draft 6 A URI Reference (either a URI or a relative-reference), according to RFC3986, section 4.1.
`"iri"`info yellowNew in draft 7 The internationalized equivalent of a "uri", according to RFC3987.
`"iri-reference"`info yellowNew in draft 7 The internationalized equivalent of a "uri-reference", according to RFC3987.

`"uri-template"`info yellowNew in draft 6 A URI Template (of any level) according to RFC6570. If you don't already know what a URI Template is, you probably don't need this value.

`"json-pointer"`info yellowNew in draft 6 A JSON Pointer, according to RFC6901. There is more discussion on using JSON Pointer within JSON Schema in Structuring a complex schema. Note that this should be used only when the entire string contains only JSON Pointer content, e.g., `/foo/bar`. JSON Pointer URI fragments, e.g., `#/foo/bar/ `should use `"uri-reference"`.
`"relative-json-pointer"`info yellowNew in draft 7 A relative JSON pointer.

`"regex"`info yellowNew in draft 7 A regular expression that should be valid according to the ECMA 262 dialect. Be careful, in practice, JSON Schema validators are only required to accept the safe subset of regular expressions described elsewhere in this document.
