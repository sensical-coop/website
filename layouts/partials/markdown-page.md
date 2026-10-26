{{- /* Renders a page as clean Markdown for LLMs. Context: dict "page" "body" */ -}}
{{- $p := .page -}}
{{- $root := strings.TrimSuffix "/" hugo.Sites.Default.Home.Permalink -}}
{{- $body := .body | replaceRE `\]\((/[^)]*)\)` (printf "](%s$1)" $root) | replaceRE `\n{3,}` "\n\n" | strings.TrimSpace -}}
# {{ $p.Title }}

{{ with $p.Description }}> {{ . }}

{{ end -}}
Source: {{ $p.Permalink }}

{{ $body }}
