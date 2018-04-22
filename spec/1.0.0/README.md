# Greenlight Report Spec

## Data Structure

Reports are required to be served as `UTF-8` encoded `JSON` data, other encodings are forbidden.

###### Example

- [`full example`](#json-example)

---

### `issue`

```json
{
  "id": "123456",
  "name": "semi",
  "description": "Extra semicolon",
  "severity": "info",
  "context": {}
}
```

name            | type     | required | default | description                                                                                                
--------------- | -------- | -------- | ------- | -----------------------------------------------------------------------------------------------------------
**id**          | `String` | 🗸       | `-`     | A unique, deterministic identifier for the specific issue _(to allow users to exclude it in future scans)_ 
**name**        | `String` | 🗸       | `-`     | Unique name representing the check that emitted this issue                                                 
**description** | `String` | ✗        | `-`     | Text snippet describing the issue in detail. _(markdown accepted)_                                         
**severity**    | `Enum`   | 🗸       | `-`     | A Severity string (`info`, `minor`, `major`, `critical`) describing the potential impact of the issue found
**context**     | `Object` | 🗸       | `-`     | a [`context`](#context) object                                                                             

### `context`

```json
{
  "type": "file",
  "path": "path/to/file.js",
  "start": {},
  "end": {}
}
```

name      | type     | required | default | description                                                         
--------- | -------- | -------- | ------- | --------------------------------------------------------------------
**type**  | `Enum`   | 🗸       | `-`     | Context type (`file`)                                               
**path**  | `String` | 🗸       | `-`     | Path to file relative to `/code`                                    
**start** | `Object` | ✗        | `-`     | a [`position`](#position) object describing the start of the context
**end**   | `Object` | ✗        | `-`     | a [`position`](#position) object describing the end of the context  

### `position`

```json
{
  "line": 2,
  "column": 10
}
```

name       | type     | required | default | description       
---------- | -------- | -------- | ------- | ------------------
**line**   | `Number` | 🗸       | `-`     | Line coordinates  
**column** | `Number` | 🗸       | `-`     | Column coordinates

---

###### JSON Example

> ```json
> {
>   "id": "123456",
>   "name": "semi",
>   "description": "Extra semicolon",
>   "severity": "critical",
>   "context": {
>     "type": "file",
>     "path": "path/to/file.js",
>     "start": {
>       "line": 2,
>       "column": 10
>     },
>     "end": {
>       "line": 2,
>       "column": 11
>     }
>   }
> }
> ```

[json]: https://www.json.org/

[semver]: https://semver.org
