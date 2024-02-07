import { useEffect, useState } from "react";
import { Position } from "reactflow";

/**
 * useLoadJSON hook
 *
 * @param {string} filePath - Relative path to the JSON file in the public folder
 * @returns {Object} - Loaded JSON data and a loading state
 */
export const useLoadJson = (filePath: string) => {
  const [canvasNodes, setCanvasNodes] = useState(null);
  const [canvasEdges, setCanvasEdges] = useState(null);
  const [loading, setLoading] = useState(true);

  const convertNodes = (nodes: any) => {
    return nodes.map((node: any) => ({
      id: node.id,
      type: node.type,
      position: {
        x: node.x,
        y: node.y,
      },
      data: {
        label: node.text,
      },
      style: {
        width: node.width,
        height: node.height,
        "font-size": 20,
      },
      ...nodeDefaults,
    }));
  };

  const nodeDefaults = {
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  };

  const convertEdges = (edges: any) => {
    return edges.map((edge: any) => ({
      id: edge.id,
      source: edge.fromNode,
      target: edge.toNode,
    }));
  };

  useEffect(() => {
    // Make a fetch request to the static content in the public folder
    fetch(filePath)
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        setCanvasNodes(convertNodes(data.nodes));
        setCanvasEdges(convertEdges(data.edges));
        setLoading(false);
      })
      .catch(error => {
        console.error("There was a problem with the fetch operation:", error.message);
        setLoading(false);
      });
  }, [filePath]);

  return { canvasNodes, canvasEdges, loading };
};
