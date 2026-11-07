{{- $body := partial "markdown-source.md" .RawContent -}}
{{- if eq .Type "projects" -}}
  {{- $facts := "" -}}
  {{- with .Params.client }}{{ $facts = printf "%s\n- %s: %s" $facts (T "Client") . }}{{ end -}}
  {{- with .Params.year }}{{ $facts = printf "%s\n- %s: %v" $facts (T "Year") . }}{{ end -}}
  {{- with .Params.location }}{{ $facts = printf "%s\n- %s: %s" $facts (T "Location") . }}{{ end -}}
  {{- with .Params.partners }}{{ $facts = printf "%s\n- %s: %s" $facts (T "Partners") (delimit . ", ") }}{{ end -}}
  {{- with $facts }}{{ $body = printf "%s\n\n%s" (strings.TrimPrefix "\n" .) $body }}{{ end -}}
  {{- with .Params.services -}}
    {{- with where (where site.RegularPages "Type" "services") ".Params.translationKey" "in" . -}}
      {{- $body = printf "%s\n\n## %s\n" $body (T "Services in this project") -}}
      {{- range . }}{{ $body = printf "%s\n- [%s](%s)" $body .Title .Permalink }}{{ end -}}
    {{- end -}}
  {{- end -}}
{{- else -}}
  {{- with .Params.translationKey -}}
    {{- with where (where site.RegularPages "Type" "projects") ".Params.services" "intersect" (slice .) -}}
      {{- $body = printf "%s\n\n## %s\n" $body (T "Related projects") -}}
      {{- range . }}{{ $body = printf "%s\n- [%s](%s)" $body .Title .Permalink }}{{ end -}}
    {{- end -}}
  {{- end -}}
  {{- with .Params.related_pages -}}
    {{- with where (where site.RegularPages "Type" "services") ".File.TranslationBaseName" "in" . -}}
      {{- $body = printf "%s\n\n## %s\n" $body (T "Related services") -}}
      {{- range . }}{{ $body = printf "%s\n- [%s](%s)" $body .Title .Permalink }}{{ end -}}
    {{- end -}}
  {{- end -}}
{{- end -}}
{{ partial "markdown-page.md" (dict "page" . "body" $body) }}
