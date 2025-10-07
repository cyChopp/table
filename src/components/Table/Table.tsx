import React, { JSX, useState, useRef, useEffect } from "react";
import "./Table.css";

// Define the interface for a node in the tree
interface Node {
  id: number;
  parentId: number;
  isActive: boolean;
  balance: string;
  name: string;
  email: string;
  children: Node[];
}

// Define the data array with the Omit utility to exclude the 'children' field initially
const data: Omit<Node, "children">[] = [
  {
    id: 1,
    parentId: 0,
    isActive: true,
    balance: "$3,655.34",
    name: "Yolanda Chavez",
    email: "yolandachavez@isoplex.com",
  },
  {
    id: 2,
    parentId: 0,
    isActive: true,
    balance: "$1,247.87",
    name: "Navarro Levy",
    email: "navarrolevy@isoplex.com",
  },
  {
    id: 3,
    parentId: 2,
    isActive: true,
    balance: "$2,559.85",
    name: "Wooten Hartman",
    email: "wootenhartman@isoplex.com",
  },
  {
    id: 4,
    parentId: 3,
    isActive: false,
    balance: "$3,474.20",
    name: "Mack Hess",
    email: "mackhess@isoplex.com",
  },
  {
    id: 5,
    parentId: 0,
    isActive: false,
    balance: "$2,231.49",
    name: "Jocelyn Burch",
    email: "jocelynburch@isoplex.com",
  },
  {
    id: 6,
    parentId: 5,
    isActive: false,
    balance: "$3,955.44",
    name: "Prince Daniel",
    email: "princedaniel@isoplex.com",
  },
  {
    id: 7,
    parentId: 5,
    isActive: false,
    balance: "$1,994.83",
    name: "Newton Medina",
    email: "newtonmedina@isoplex.com",
  },
  {
    id: 8,
    parentId: 0,
    isActive: true,
    balance: "$1,311.17",
    name: "Arnold Steele",
    email: "arnoldsteele@isoplex.com",
  },
  {
    id: 9,
    parentId: 0,
    isActive: false,
    balance: "$2,313.46",
    name: "Kitty Glover",
    email: "kittyglover@isoplex.com",
  },
  {
    id: 10,
    parentId: 9,
    isActive: false,
    balance: "$3,314.14",
    name: "Pruitt Spencer",
    email: "pruittspencer@isoplex.com",
  },
  {
    id: 11,
    parentId: 0,
    isActive: false,
    balance: "$1,778.44",
    name: "Stefanie Quinn",
    email: "stefaniequinn@isoplex.com",
  },
  {
    id: 12,
    parentId: 0,
    isActive: true,
    balance: "$1,141.37",
    name: "Fox Mcpherson",
    email: "foxmcpherson@isoplex.com",
  },
  {
    id: 13,
    parentId: 0,
    isActive: false,
    balance: "$2,662.03",
    name: "Rodriquez Young",
    email: "rodriquezyoung@isoplex.com",
  },
  {
    id: 14,
    parentId: 0,
    isActive: false,
    balance: "$2,573.84",
    name: "Love Byers",
    email: "lovebyers@isoplex.com",
  },
  {
    id: 15,
    parentId: 14,
    isActive: false,
    balance: "$1,254.07",
    name: "Banks Short",
    email: "banksshort@isoplex.com",
  },
  {
    id: 16,
    parentId: 14,
    isActive: true,
    balance: "$3,820.34",
    name: "Guthrie Brown",
    email: "guthriebrown@isoplex.com",
  },
  {
    id: 17,
    parentId: 16,
    isActive: true,
    balance: "$2,884.74",
    name: "Kirsten Mcmahon",
    email: "kirstenmcmahon@isoplex.com",
  },
  {
    id: 18,
    parentId: 1,
    isActive: false,
    balance: "$1,694.76",
    name: "Mcbride Sykes",
    email: "mcbridesykes@isoplex.com",
  },
  {
    id: 19,
    parentId: 1,
    isActive: true,
    balance: "$3,644.56",
    name: "Juanita Camacho",
    email: "juanitacamacho@isoplex.com",
  },
  {
    id: 20,
    parentId: 17,
    isActive: false,
    balance: "$1,179.25",
    name: "Carlene Little",
    email: "carlenelittle@isoplex.com",
  },
  {
    id: 21,
    parentId: 0,
    isActive: true,
    balance: "$3,506.90",
    name: "Caitlin Bernard",
    email: "caitlinbernard@isoplex.com",
  },
  {
    id: 22,
    parentId: 21,
    isActive: false,
    balance: "$2,924.31",
    name: "Vargas Lowe",
    email: "vargaslowe@isoplex.com",
  },
  {
    id: 23,
    parentId: 22,
    isActive: false,
    balance: "$1,211.95",
    name: "Mae Santiago",
    email: "maesantiago@isoplex.com",
  },
  {
    id: 24,
    parentId: 22,
    isActive: true,
    balance: "$2,959.37",
    name: "Gallagher Burnett",
    email: "gallagherburnett@isoplex.com",
  },
  {
    id: 25,
    parentId: 0,
    isActive: false,
    balance: "$1,880.20",
    name: "Reyna Mayo",
    email: "reynamayo@isoplex.com",
  },
  {
    id: 26,
    parentId: 0,
    isActive: false,
    balance: "$1,639.69",
    name: "Hardy Townsend",
    email: "hardytownsend@isoplex.com",
  },
  {
    id: 27,
    parentId: 0,
    isActive: false,
    balance: "$3,211.26",
    name: "Cohen Best",
    email: "cohenbest@isoplex.com",
  },
  {
    id: 28,
    parentId: 27,
    isActive: true,
    balance: "$2,270.94",
    name: "Sherrie Berger",
    email: "sherrieberger@isoplex.com",
  },
  {
    id: 29,
    parentId: 27,
    isActive: false,
    balance: "$2,049.45",
    name: "Gentry Robbins",
    email: "gentryrobbins@isoplex.com",
  },
  {
    id: 30,
    parentId: 0,
    isActive: true,
    balance: "$1,177.86",
    name: "Etta Sampson",
    email: "ettasampson@isoplex.com",
  },
];

// Function to build the tree structure with TypeScript types
function buildTree(data: Omit<Node, "children">[]): Node[] {
  const map = new Map<number, Node>();
  data.forEach((item) => {
    map.set(item.id, { ...item, children: [] });
  });
  const roots: Node[] = [];
  data.forEach((item) => {
    if (item.parentId === 0) {
      roots.push(map.get(item.id)!);
    } else {
      const parent = map.get(item.parentId);
      if (parent) {
        parent.children.push(map.get(item.id)!);
      }
    }
  });
  // Sort roots and children by id for consistent order
  roots.sort((a, b) => a.id - b.id);
  const sortChildren = (node: Node) => {
    node.children.sort((a, b) => a.id - b.id);
    node.children.forEach(sortChildren);
  };
  roots.forEach(sortChildren);
  return roots;
}

const Table: React.FC = () => {
  const roots = buildTree(data);
  const [expanded, setExpanded] = useState<Set<number>>(new Set());
  const [isActiveFilter, setIsActiveFilter] = useState<boolean | null>(null);
  const [appliedIsActiveFilter, setAppliedIsActiveFilter] = useState<
    boolean | null
  >(null);
  const [balanceFilter, setBalanceFilter] = useState<string>("");
  const [appliedBalanceFilter, setAppliedBalanceFilter] = useState<string>("");
  const [emailFilter, setEmailFilter] = useState<string>("");
  const [appliedEmailFilter, setAppliedEmailFilter] = useState<string>("");
  const [showFilters, setShowFilters] = useState(false);
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as any) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as any)
      ) {
        setShowFilters(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function toggleExpand(id: number) {
    const isCurrentlyExpanded = expanded.has(id);
    setHoveredNode(isCurrentlyExpanded ? null : id);
    setExpanded((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  }

  function matches(node: Node): boolean {
    let match = true;
    if (appliedIsActiveFilter !== null) {
      match = match && node.isActive === appliedIsActiveFilter;
    }
    if (appliedBalanceFilter) {
      match =
        match &&
        node.balance.toLowerCase().includes(appliedBalanceFilter.toLowerCase());
    }
    if (appliedEmailFilter) {
      match =
        match &&
        node.email.toLowerCase().includes(appliedEmailFilter.toLowerCase());
    }
    return match;
  }

  function hasMatchingDescendant(node: Node): boolean {
    if (matches(node)) return true;
    return node.children.some((child) => hasMatchingDescendant(child));
  }

  function renderNodes(nodes: Node[], level: number = 0): JSX.Element[] {
    return nodes.flatMap((node) => {
      if (!hasMatchingDescendant(node)) return [];
      const isExpanded = expanded.has(node.id);
      const hasVisibleChildren = node.children.some((child) =>
        hasMatchingDescendant(child)
      );
      const contentIndent = level * 24;
      const isHovered =
        hoveredNode === node.id ||
        (hoveredNode !== null &&
          isExpanded &&
          node.id !== hoveredNode &&
          level > 0);
      const row = (
        <tr
          key={node.id}
          className={`table-row ${isHovered ? "hovered" : ""}`}
          onMouseEnter={() => setHoveredNode(node.id)}
          onMouseLeave={() => setHoveredNode(null)}
          onClick={() => hasVisibleChildren && toggleExpand(node.id)}
        >
          <td
            className="expand-cell expand-column"
            style={{ paddingLeft: `${16 + level * 24}px` }}
          >
            {hasVisibleChildren && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleExpand(node.id);
                }}
                className="expand-button"
              >
                <span className="expand-icon">
                  {isExpanded ? "expand_more" : "chevron_right"}
                </span>
              </button>
            )}
          </td>
          <td
            className="table-cell status-column"
            style={{ paddingLeft: `${16 + contentIndent}px` }}
          >
            <span
              className={`status-badge ${
                node.isActive ? "active" : "inactive"
              }`}
            >
              {node.isActive ? "Active" : "Inactive"}
            </span>
          </td>
          <td
            className={`table-cell name-cell name-column ${
              hasVisibleChildren ? "has-children" : ""
            }`}
            style={{ paddingLeft: `${16 + contentIndent}px` }}
          >
            {node.name}
          </td>
          <td
            className="table-cell email-cell email-column"
            style={{ paddingLeft: `${16 + contentIndent}px` }}
          >
            {node.email}
          </td>
          <td
            className="table-cell balance-cell balance-column"
            style={{ paddingLeft: `${16 + contentIndent}px` }}
          >
            {node.balance}
          </td>
        </tr>
      );
      if (!hasVisibleChildren || !isExpanded) return [row];
      const childRows = renderNodes(node.children, level + 1);
      return [row, ...childRows];
    });
  }

  return (
    <div className="tree-table-container">
      <div className="filter-container">
        <button
          ref={buttonRef}
          onClick={() => setShowFilters(!showFilters)}
          className="filter-button"
        >
          <span className="filter-icon">filter_list</span>
          Filter
        </button>
        {showFilters && (
          <div ref={modalRef} className="filter-modal">
            <div className="filter-modal-content">
              <div className="filter-group">
                <label className="filter-label">Status</label>
                <select
                  value={
                    isActiveFilter === null ? "" : isActiveFilter.toString()
                  }
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    const val = e.target.value;
                    setIsActiveFilter(val === "" ? null : val === "true");
                  }}
                  className="filter-select"
                >
                  <option value="">All</option>
                  <option value="true">Active</option>
                  <option value="false">Inactive</option>
                </select>
              </div>
              <div className="filter-group">
                <label className="filter-label">Balance Filter</label>
                <input
                  placeholder="Filter by balance"
                  value={balanceFilter}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setBalanceFilter(e.target.value)
                  }
                  className="filter-input"
                />
              </div>
              <div className="filter-group">
                <label className="filter-label">Email Filter</label>
                <input
                  placeholder="Filter by email"
                  value={emailFilter}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEmailFilter(e.target.value)
                  }
                  className="filter-input"
                />
              </div>
            </div>
            <button
              onClick={() => {
                setAppliedIsActiveFilter(isActiveFilter);
                setAppliedBalanceFilter(balanceFilter);
                setAppliedEmailFilter(emailFilter);
                setShowFilters(false);
              }}
              className="apply-filters-button"
            >
              Apply Filters
            </button>
          </div>
        )}
      </div>
      <div className="table-container">
        <table className="tree-table">
          <thead>
            <tr className="table-header-row">
              <th className="table-header-cell expand-column"></th>
              <th className="table-header-cell status-column">Status</th>
              <th className="table-header-cell name-column">Name</th>
              <th className="table-header-cell email-column">Email</th>
              <th className="table-header-cell balance-column">Balance</th>
            </tr>
          </thead>
          <tbody>{renderNodes(roots)}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
