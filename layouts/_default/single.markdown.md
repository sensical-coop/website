{{- $body := partial "markdown-source.md" .RawContent -}}
{{- with .Params.related_pages -}}
  {{- $related := where (where site.RegularPages "Type" "work") ".File.TranslationBaseName" "in" . -}}
  {{- with $related -}}
    {{- $body = printf "%s\n\n## %s\n" $body (T "Related work") -}}
    {{- range . }}{{ $body = printf "%s\n- [%s](%s)" $body .Title .Permalink }}{{ end -}}
  {{- end -}}
{{- end -}}
{{ partial "markdown-page.md" (dict "page" . "body" $body) }}
