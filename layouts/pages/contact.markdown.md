{{- $c := hugo.Data.contact -}}
{{- $body := partial "markdown-source.md" .RawContent -}}
{{- with $c.email }}{{ $body = printf "%s\n\n- **%s:** [%s](mailto:%s)" $body (T "Email") . . }}{{ end -}}
{{- with $c.address }}{{ $body = printf "%s\n- **%s:** %s" $body (T "Address") (replace (strings.TrimSpace .) "\n" ", ") }}{{ end -}}
{{- with $c.PIC }}{{ $body = printf "%s\n- **%s:** %v" $body (T "Participant Identification Code (PIC)") . }}{{ end -}}
{{- with $c.VATINT }}{{ $body = printf "%s\n- **%s:** %s" $body (T "VAT Number (International)") . }}{{ end -}}
{{ partial "markdown-page.md" (dict "page" . "body" $body) }}
